(function () {
    angular
        .module('app')
        .controller('detailCtrl', detailCtrl);
    detailCtrl.$inject = ['$routeParams', '$location', 'myService'];

    function detailCtrl($routeParams, $location, myService) {
        var vm = this;
        vm.kupi = kupi;
        activate();

        function activate() {
            return get1FMem().then(function () {
                console.log("ACTIVATE");

                vm.naAkciji = function () {
                    if (vm.flashMemory.akcija == 1) {
                        return "Da";
                    } else {
                        return "Ne";
                    }
                };

            });
        };

        function get1FMem() {
            return myService.find($routeParams.index)
                .then(function (data) {
                    vm.flashMemory = data;
                    return vm.flashMemory;
                })
        };

        function kupi() {
            $location.path('/fmem');

        };
    };
})();