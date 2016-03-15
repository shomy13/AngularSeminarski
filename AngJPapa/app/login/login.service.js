(function () {
    angular
        .module('app')
        .factory('loginService', loginService);
    loginService.$inject = ['$http', '$location', 'sessionService'];

    function loginService($http, $location, sessionService) {
        var vm = this;
        vm.value = '';
        return {
            login: login,
            logout: logout,
            islogged: islogged,
            isAdmin: isAdmin,
            signUp: signUp,
            korisnikById: korisnikById,
        };

        function login(user) {
            return $http.post('http://localhost:8086/projekat/webapi/korisnik', user)
                .then(postCompleted)
                .catch(postFailed);

            function postCompleted(response) {
                if (response.data) {
                    sessionService.set('token', response.data.token);
                    sessionService.set('id', response.data.id);
                    sessionService.set('admin', response.data.admin)
                    if (response.data.admin == 1) {
                        $location.path('/admin');
                    } else {
                        vm.msgTxt = 'Uspesna prijava!'
                        return vm.msgTxt;
                    }
                } else {
                    vm.msgTxt = 'Pogresni podaci!';
                    return vm.msgTxt;
                }
            }

            function postFailed() {
                console.log('greska u komunikaciji sa bazom')
            }
        };

        function logout() {
            sessionService.destroy('token');
            sessionService.destroy('id');
            sessionService.destroy('admin');
            $location.path('/pocetna');
        };

        function islogged() {
            if (sessionService.get('token')) {
                return true
            } else {
                return false
            }
        };

        function isAdmin() {
            if (sessionService.get('admin')=='1')
                return true
            else
                return false
        };

        function signUp(user) {
            return $http.put('http://localhost:8086/projekat/webapi/korisnik', user)
                .then(putCompleted)
                .catch(putFailed);

            function putCompleted(response) {
                if (response.data == 'true') {
                    vm.msgTxt = 'Uspesna Registracija'
                    return vm.msgTxt;
                } else {
                    vm.msgTxt = 'Korisnik vec postoji!'
                    return vm.msgTxt;
                }

            }

            function putFailed() {
                console.log('greska u komunikaciji sa bazom')
            }
        };

        function korisnikById(id) {
            return $http.get('http://localhost:8086/projekat/webapi/korisnik/' + id)
                .then(getCompleted)
                .catch(getFailed);

            function getCompleted(response) {
                return response.data;
            }

            function getFailed() {
                console.log('greska u komunikaciji sa bazom')
            }
        };


    }

})();