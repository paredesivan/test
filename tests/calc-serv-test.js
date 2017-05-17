//los describes agrupan specs(casos)

describe("probando modulo factories", function () {
    var ls;

    //agregando prubea/
    //cargo el modulo starter.factories
    beforeEach(module('starter.factories'));

    //inyecto el servicio
    beforeEach(inject(function (BaseDatosService) {
        ls = BaseDatosService;
    }));

    it("pueba espia", function () {
        expect(ls.inicial(5)).toBe(true);
    });

    it("pueba espia", function () {
        spyOn(ls, "aespiar"); //pongo un espia cuando llama a inicial
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalledWith(5); //verifica que aespiar sea llamada con un 5 dentro de la funcion

    });

    it("pueba espia", function () {
        spyOn(ls, "aespiar");
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalled(); //devuelve true si inicial llama a "aespiar"
    });

    it("pueba espia", function () {
        spyOn(ls, "aespiar").and.returnValue(6); //pongo un espia cuando llama a inicial
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalled(); //y veo como inicial la llama a "aespiar"
        expect(ls.aespiar()).toBe(6); //si va a andar porque el spyon devuleve undefined
    });

    it("pueba espia", function () {
        ls.aespiar = jasmine.createSpy("pipipiar"); //pongo un espia cuando llama a inicial
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalledWith(5);
    });

    it("pueba espia", function () {
        spyOn(ls,"aespiar").and.returnValue(6); //pongo un espia cuando llama a inicial. simulo que retorno 6
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalledWith(5);
        expect(ls.inicial(4)).toBe(6);
    });

    it("pueba espia", function () {
        ls.aespiar = jasmine.createSpy("pipipiar").and.returnValue(7); //pongo un espia cuando llama a inicial. simulo que retorno 6
        ls.inicial(4);
        expect(ls.aespiar).toHaveBeenCalledWith(5);
        expect(ls.inicial(6)).toBe(7);
    });


    //corro el test para ver si esta definido el servicio local
    xit('prueba guardarenlocastorage', function () {
        //expect(ls).toBeDefined(); //verifica que este definida la factory
        //expect(ls.guardarEnLocalStorage).toBeDefined(); //verifica que este definida la funcion de la factory
        expect(ls.guardarEnLocalStorage(null, 5)).toEqual(jasmine.objectContaining({
            Estado: false, Respuesta: 'nombre null o indefinido'
        }));

        expect(ls.guardarEnLocalStorage(undefined, 5)).toEqual(jasmine.objectContaining({
            Estado: false, Respuesta: 'nombre null o indefinido'
        }));

        expect(ls.guardarEnLocalStorage("usuarios", 5)).toEqual(jasmine.objectContaining({
            Estado: true, Respuesta: 'seteado correctamente: usuarios y valor: 5'
        }));

        expect(ls.guardarEnLocalStorage(5, 5)).toEqual(jasmine.objectContaining({
            Estado: false, Respuesta: 'el nombre no es un string'
        }));

        expect(ls.guardarEnLocalStorage('usuarios', undefined)).toEqual(jasmine.objectContaining({
            Estado: false, Respuesta: 'el valor es undefined'
        }));

        expect(ls.guardarEnLocalStorage()).toEqual(jasmine.objectContaining({
            Estado: false, Respuesta: 'nombre null o indefinido'
        }));


        //expect(function(){ls.guardarEnLocalStorage('', '')}).toThrowError();

    });
});
//
//describe("CalcServ", function () {
//    var mdispositivo;
//    var m;
//
//
//    //el modulo starter.factories inyecta a LocalStorageModule, pero como no lo uso inyecto en ninguna de las factoris a localStorageService, no salta error
//    beforeEach(module('starter.factories'));
//
//    beforeEach(inject(function (dispositivo) {
//        mdispositivo = dispositivo;
//    }));
//
//    //inyecto el servicio
//    beforeEach(inject(function (dinnerService) {
//        m = dinnerService;
//    }));
//
//    it('debe cargar el servicio', function () {
//        expect(mdispositivo).toBeDefined();
//        expect(mdispositivo.alcuadrado).toBeDefined();
//    });
//
//    it('debe cargar el servicio dinner', function () {
//        expect(m).toBeDefined();
//        expect(m.login).toBeDefined();
//    });
//
//    it('debe operar con valores numericos', function () {
//        expect(mdispositivo.alcuadrado(2)).toBe(4);
//        expect(mdispositivo.alcuadrado(2)).not.toBe(5);
//        expect(mdispositivo.alcuadrado(2)).not.toBe(3);
//    });
//
//    it('debe levantar excepcion con cadenas de textos', function () {
//        //expect(CServ.alcuadrado(2)).toBe(4);
//        expect(function () {
//            mdispositivo.alcuadrado("Hola")
//        }).toThrowError();
//    });
//});
//
//describe("'toBe' matcher compara csasasaon ===", function () {
//
//    it("testea si una funcion arroja una excepcion", function () {
//        var foo = function () {
//            return 1 + 2;
//        };
//        var bar = function () {
//            return c + 1;
//        };
//        var baz = function () {
//            throw 'what';
//        };
//
//        expect(foo).not.toThrow();
//        expect(bar).toThrow();
//        expect(baz).toThrow('what');
//
//    });
//
//    it("testea si una funcion arroja una excepcion especifica,", function () {
//        var foo = function () {
//            throw new TypeError("foo bar baz");
//        };
//
//        //espero una excepcion espeficica, esta fallaria por ser general
//        //expect(foo).toThrow();
//
//        expect(foo).toThrowError("foo bar baz");
//        expect(foo).toThrowError(/bar/);
//        expect(foo).toThrowError(TypeError);
//        expect(foo).toThrowError(TypeError, "foo bar baz");
//    });
//
//    var a;
//
//    it("and has a positive case", function () {
//        expect(true).toBe(true);
//    });
//
//    it("and can have a negative case", function () {
//        expect(false).not.toBe(true);
//    });
//
//    it("prueba de ser verdadero", function () {
//        a = true;
//
//        expect(!a).toBe(false);
//    });
//
//    it("The 'toBe' matcher compares with ===", function () {
//        var a = 12;
//        var b = a;
//
//        expect(a).toBe(b);
//        expect(a).not.toBe(null);
//    });
//
//});
//
//describe("IGUAL A", function () {
//
//    it("works for simple literals and variables", function () {
//        var a = 12;
//        expect(a).toBe(12);
//        expect(a).not.toBe(124);
//    });
//    it("OBJETOS", function () {
//        var foo = {
//            a: 12,
//            b: 34
//        };
//        var bar = {
//            a: 12,
//            b: 34
//        };
//        expect(foo).toEqual(bar);
//    });
//
//    it("MATCH", function () {
//        var message = "foo bar baz";
//
//        expect(message).toMatch(/bar/);
//        expect(message).toMatch("bar");
//    });
//
//    it("DEFINED", function () {
//        var a = {
//            foo: "foo"
//        };
//
//        expect(a.foo).toBeDefined();
//
//    });
//
//    it("NULO", function () {
//        var a = null;
//        var foo = "foo";
//
//        expect(null).toBeNull();
//        expect(a).toBeNull();
//        expect(foo).not.toBeNull();
//    });
//
//    it("VERDADERO", function () {
//        var a, foo = "HOLA";
//
//        expect(foo).toBeTruthy();
//        expect(a).not.toBeTruthy();
//    });
//
//    it("encuentra item en un array", function () {
//        var a = ["foo", "bar", "baz"];
//
//        expect(a).toContain("bar");
//    });
//
//    it("encuentra texto en un string", function () {
//        var a = "foo bar baz";
//
//        expect(a).toContain("bar");
//    });
//
//    it("COMPARACIONES MATEMATICAS", function () {
//        var pi = 3.1415926,
//            e = 2.78;
//
//        expect(e).toBeLessThan(pi);
//        expect(pi).not.toBeLessThan(e);
//    });
//
//});
//
//describe("PRUEBA FUNCION FAIL", function () {
//    var foo = function (callBackError) {
//        var x = 2;
//        if (x != 2) {
//            callBackError();
//        }
//    };
//
//    it("should not call the callBack", function () {
//        foo(function () {
//            fail("Callback has been called");
//        });
//
//
//        //otra manera de escribirlo
//        foo(error);
//
//        function error() {
//
//        }
//    });
//});
//
////para evitar escribir siempre lo mismo cuando se corren los tests
////beforeEach, afterEach, beforeAll, and afterAll functions.
//describe("A spec using beforeEach and afterEach", function () {
//    beforeEach(function () {
//        foo += 1;
//    });
//
//    afterEach(function () {
//        foo = 0;
//    });
//});
//
//
////para desactivar una prueba describe o it agregar la letra x delante
////no arrojara error, solo dira skipped
//
////los espias nos permiten seguir el rastro de las llamadas a las funciones y sus argumentos
////Spy: Un spy es una función que se envía como parámetro al sujeto bajo prueba para que recolecte informacion sobre lo que sucede dentro de esa función y objeto,
//// La información que puede recolectar es: el número de veces que se llama una función, con que parámetros y cuales se llama, los valores de retorno o si lanzó excepciones.
//
//describe('controlador', function () {
//
//    var mcontroller;
//    var deferLogin;
//    var mdinnerService;
//    var mstateMock;
//    var mionicpopup;
//
//    //cargar modulo antes de cada spec, para poder acceder al controlador que tiene la funcion a testear
//    //la funcion modulo es una funcion de la libreria de angular-mocks
//    //beforeEach(module('starter.controllers'));
//
//    var m;
//
//
//    beforeEach(module('starter.factories'));
//
//
//    beforeEach(inject(function (dinnerService) {
//        m = dinnerService;
//    }));
//
//
//    it('debe cargar el servicio dinner', function () {
//        expect(m).toBeDefined();
//        expect(m.login).toBeDefined();
//    });
//
//
//    //instanciar el contolador y TODOS los mocks o lo que se inyecta en el controlador
//    //inject es una funcion de angular-mocks, permite inyectar dependencias
//    beforeEach(inject(function ($controller, $q) {
//
//        var $$q = $q;
//        deferLogin = $$q.defer();
//
//        //aca creo mocks de dos maneras diferentes
//
//        //mock dinnerService.
//        //define un espia dentro de la funcion login,
//        // asi se puede simular la implementacion de esta funcion y setear un objeto deferred que es retornado al test
//        mdinnerService = {
//            login: jasmine.createSpy('login espia')
//                .and.returnValue(deferLogin.promise)
//        };
//
//        //mock $state. creado un objeto y definiendo la misma funcion como la implementacion real
//        mstateMock = jasmine.createSpyObj('çarga de espia estate', ['go']);
//
//        //mock ionicpopup. automaticamente tiene un espia en la funcion 'alert'
//        //porque esta incluida en el segundo argumento
//        mionicpopup = jasmine.createSpyObj('çarga de espia mstatemock', ['alert']);
//
//        //mock controlador
//        mcontroller = $controller('LoginController', {
//            '$ionicPopup': mionicpopup,
//            '$state': mstateMock,
//            'dinnerService': mdinnerService
//        });
//    }));
//
//    xdescribe('dologin', function () {
//
//        beforeEach(inject(function (_$rootScope_) {
//
//            //instancio el $rootScope
//            $rootScope = _$rootScope_;
//
//            //seteo de variables como si estuviera en el controlador
//            controller.username = '1';
//            controller.password = '1';
//
//            //aespiar a la funcion del controlador
//            controller.doLogin();
//        }));
//
//        it('debe llamar al login de dinnerservice', function () {
//            expect(mdinnerService.login).toHaveBeenCalledWith('1', '1');
//        });
//
//        describe('cuando el login es ejecutado', function () {
//
//            it('si esta todo bien debe ir al state dinners', function () {
//                expect(mstateMock.go).toHaveBeenCalledWith('mydinners');
//            });
//
//            it('si esta todo mal debe mostrar el popup', function () {
//                expect(mionicpopup.alert).toHaveBeenCalled();
//
//            })
//        });
//    });
//
//});
//
//
//
//
