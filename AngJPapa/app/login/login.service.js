(function () {
    angular
        .module('app')
        .factory('loginService', loginService);
    loginService.$inject = ['$http', '$location', 'sessionService'];

    function loginService($http, $location, sessionService) {
        var vm = this;
        vm.value = '';
        vm.admin = '';
        return {
            login: login,
            logout : logout,
            islogged : islogged,
            isAdmin : isAdmin
        };

        function login(user) {
            return $http.post('http://localhost:8086/projekat/webapi/admin', user)
                .then(postCompleted)
                .catch(postFailed);

            function postCompleted(response) {
                if (response.data) {
                 sessionService.set('token', response.data.token);
                    if(response.data.admin==1){
                    $location.path('/admin');
                        vm.admin = true;
                    }else{
                        vm.msgTxt = "Uspesna prijava!"
                        return vm.msgTxt;
                    }
                } else {
                    vm.msgTxt = "Pogresni podaci!";
                    return vm.msgTxt;
                }
            }

            function postFailed() {
                console.log("greska u komunikaciji sa bazom")
            }
        }
        
        function logout(){
             sessionService.destroy('token');
            vm.admin = false;
            $location.path('/pocetna');
        }
        
        function islogged(){
           if(sessionService.get('token')){
               return true
        }else{
            return false
        }}
        
        function isAdmin(){
            if(vm.admin)
                return true
            else
                return false
        }
    }

})();