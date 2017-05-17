/**
 * Created by user on 24/03/2017.
 */

//inyecta el modulo local storage
angular.module('starter.factories', ['LocalStorageModule'])
    .factory('dispositivo', function () {
        return {
            alcuadrado: function (n) {

                //verifica el tipo de dato
                if (typeof n === 'string') {
                    throw new Error("Se esperabae un nro");
                    return;
                }

                return n * n;
            }
        };
    })

    .factory('BaseDatosService', function (localStorageService) {
        return {
            inicial: function (valor) {
                return this.aespiar(++valor);
            },

            aespiar: function (valor) {
                valor = valor + 1;
                return valor;
            },
            guardarEnLocalStorage: function (nombre, valor) {
                var msg = {};

                if (nombre == null) {
                    msg = {
                        Estado: false,
                        Respuesta: "nombre null o indefinido"
                    };
                    return msg;
                }

                if (nombre == '') {
                    msg = {
                        Estado: false,
                        Respuesta: "nombre vacio"
                    };
                    return msg;
                }

                if (typeof nombre !== 'string') {
                    msg = {
                        Estado: false,
                        Respuesta: "el nombre no es un string"
                    };
                    return msg;
                }

                if (valor === undefined) {
                    msg = {
                        Estado: false,
                        Respuesta: "el valor es undefined"
                    };
                    return msg;
                }

                try {
                    localStorageService.set(nombre, valor);

                    msg = {
                        Estado: true,
                        Respuesta: "seteado correctamente: " + nombre + " y valor: " + valor
                    }

                }
                catch (e) {
                    msg = {
                        Estado: false,
                        Respuesta: "no se pudo setear: " + nombre + " y valor: " + valor
                    }
                }
                return msg;

            }
        }
    })

    .controller('LoginController', function ($state, $ionicPopup, dinnerService) {
        //creo que poner var v=this; y despues anteponerlo a cada funcion es lo mismo que andar poniendo $scope
        var vm = this;


        vm.doLogin = function () {
            var succes = function () {
                $state.go('my-dinners')
            };
            var error = function () {
                $ionicPopup.alert({
                    title: 'login failed',
                    template: 'please try again'
                })
            };

            dinnerService.login(vm.username, vm.password).then(succes, error);
        }
    })

    .service('dinnerService', function ($q) {

        var defer = $q.defer();

        return {

            login: function (user, pass) {

                if (user == '1' && pass == '1')

                    defer.resolve();

                else
                    defer.reject();

                return defer.promise();
            }
        }
    });

