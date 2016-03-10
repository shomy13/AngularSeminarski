(function () {
    angular
        .module('app')
        .controller('listCtrl', listCtrl);
    listCtrl.$inject = ['$location', 'proizvodiService', 'loginService']

    function listCtrl($location, proizvodiService, loginService) {
        var vm = this;
        vm.sort = 'sifra';
        vm.inverse = true;
        vm.admin = admin;
        var vrsta = $location.url();
        activate(vrsta);
        vm.back = back;
        vm.detail = detail;

        function back() {
            $location.path('/');
        };

        function detail(object) {
            $location.path('/' + object.vrsta + '/' + object.id);
        };

        function activate(vrsta) {
            return getProizvod(vrsta).then(function () {});
        };

        function getProizvod(vrsta) {
            return proizvodiService.proizvodiByVrsta(vrsta)
                .then(function (data) {
                    vm.proizvod = data;
                    return vm.proizvod;
                });
        };

        function admin() {
            if (loginService.isAdmin())
                return true
            else
                return false
        }
    };
})();