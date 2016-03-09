(function () {
    angular
        .module('app')
        .controller('detailCtrl', detailCtrl);
    detailCtrl.$inject = ['$routeParams', '$location', 'proizvodiService'];

    function detailCtrl($routeParams, $location, proizvodiService) {
        var vm = this;
        vm.kupi = kupi;
        activate();

        function activate() {
            return getOne().then(function () {
                vm.naAkciji = function () {
                    if (vm.proizvodi.akcija == 1) {
                        return "Da";
                    } else {
                        return "Ne";
                    }
                }
            });
        };

        function getOne() {
            return proizvodiService.proizvodiById($routeParams.index)
                .then(function (data) {
                    vm.proizvodi = data;
                    return vm.proizvodi;
                })
        };

        function kupi() {
            $location.path('/');
        };
    };
})();