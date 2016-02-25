(function () {
    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);
        adminCtrl.$inject = ['loginService'];
    function adminCtrl(loginService) {
        var vm = this;
        
        vm.logout = logout;
        
        function logout(){
            loginService.logout();
        }
    }
})();