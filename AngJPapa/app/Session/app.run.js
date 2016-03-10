(function () {
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope', '$location', 'loginService'];

    function run($rootScope, $location, loginService) {
        var routespermission = ['/admin'];

        $rootScope.$on('$routeChangeStart', routeChangeStart);

        function routeChangeStart() {
            if (routespermission.indexOf($location.path()) != -1 && !loginService.isAdmin()) {
                $location.path('/pocetna');
            }
        }
    }
})();