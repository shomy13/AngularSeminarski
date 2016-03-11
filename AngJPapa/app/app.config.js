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
            }).when('/FMem', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/FMem/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/GPU', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/GPU/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/Memory', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/Memory/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/MBoard', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/MBoard/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/Mouse', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/Mouse/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/Monitor', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/Monitor/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/CPU', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/CPU/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/RAM', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/RAM/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/Keyboard', {
                templateUrl: 'Proizvodi/view-list.html',
                controller: 'listCtrl',
                controllerAs: 'vm'
            }).when('/Keyboard/:index', {
                templateUrl: 'Proizvodi/view-details.html',
                controller: 'detailCtrl',
                controllerAs: 'vm'
            }).when('/admin', {
                templateUrl: 'Admin/admin.html',
                controller: 'adminCtrl',
                controllerAs: 'vm'
            }).when('/korisnik', {
                templateUrl: 'login/korisnik.html',
                controller: 'korisnikCtrl',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/'
            })

        $httpProvider.interceptors.push(httpInterceptor);
        httpInterceptor.$inject = ['$q', '$location', 'sessionService'];

        function httpInterceptor($q, $location, sessionService) {
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