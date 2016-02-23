(function () {
    angular
        .module('app')
        .controller('flashMCtrl', flashMCtrl);
    flashMCtrl.$inject = ['$location', 'myService']

    function flashMCtrl($location, myService) {
        var vm = this;
        vm.sort = 'sifra';
        vm.inverse = true;
        activate();
        vm.back = back;
        vm.detailFmem = detailFmem;

        function back() {
            $location.path('/');
        };

        function detailFmem(index) {
            $location.path('/fmem/' + index.sifra);
        };

        function activate() {
            return getFMem().then(function () {
                console.log("ACTIVATE")
            });
        };

        function getFMem() {
            return myService.FMemory()
                .then(function (data) {
                    vm.flashMemories = data;
                    return vm.flashMemories;
                });
        };


    };
})();