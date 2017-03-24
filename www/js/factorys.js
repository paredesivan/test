/**
 * Created by user on 22/02/2017.
 */

angular.module('starter.factories', [])
    .factory('dispositivo', function () {
        return {
            alcuadrado: function (n) {

                if (typeof n === 'string') {
                    throw new Error("Se esperaba un nro");
                    return;
                }

                return n * n;
            }
        };
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

