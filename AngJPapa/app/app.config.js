(function () {
    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
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
    };
})();