(function () {
    angular
        .module('app')
        .config(config);

    function config($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pocetna/pocetna.html',
                controller: 'pocetnaCtrl',
                controllerAs: 'vm'
            }).when('/fmem', {
                templateUrl: 'Fmemorija/view-list-fmem.html',
                controller: 'flashMCtrl',
                controllerAs: 'vm'
            }).when('/fmem/:index', {
                templateUrl: 'Fmemorija/view-details-fmem.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/admin', {
                templateUrl: 'Admin/admin.html',
                controller: 'adminCtrl',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/'
            })

        $httpProvider.interceptors.push(httpInterceptor);
        httpInterceptor.$inject = ['$q', '$location','sessionService'];

        function httpInterceptor($q, $location,sessionService) {
            var vm = this;

            return {
                'request': request,
                'responseError': responseError
            }

            function request(config) {
                config.headers = config.headers || {};
                if (sessionService.get('token')) {
                    config.headers.Authorization = 'Bearer ' + sessionService.get('token');
                }
                return config;

            }

            function responseError(rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    sessionService.destroy('token');
                    $location.path('/pocetna');
                }
                return $q.reject(rejection);

            }
        }
    };
})();