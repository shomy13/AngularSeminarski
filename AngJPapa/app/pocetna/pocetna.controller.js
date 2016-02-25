(function () {
    angular
        .module('app')
        .controller('pocetnaCtrl', pocetnaCtrl);
    pocetnaCtrl.$inject = ['$location','loginService']

    function pocetnaCtrl($location, loginService) {
        var vm = this;
        vm.msgTxt = '';
        vm.redFmem = redFmem;
        vm.login = login;

        function redFmem() {
            $location.path("/fmem")
        }

        function login(user) {
          return loginFun(user).then(function(){
          });
         
            function loginFun(user){
                return loginService.login(user)
                    .then(function(data){
                    vm.msgTxt = data;
                    return vm.msgTxt;
                    
                })
            }
            
        };

    };
})();