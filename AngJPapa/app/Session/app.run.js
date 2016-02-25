(function () {
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope', '$location', 'loginService'];

    function run($rootScope, $location, loginService) {
        var routespermission = ['/admin'];

        $rootScope.$on('$routeChangeStart', routeChangeStart);

        function routeChangeStart() {
            console.log(routespermission.indexOf($location.path()));
            console.log(loginService.islogged());
            if (routespermission.indexOf($location.path()) != -1 && !loginService.islogged()) {
                $location.path('/pocetna');
            }
        }
    }
})();