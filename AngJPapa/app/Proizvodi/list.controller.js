(function () {
    angular
        .module('app')
        .controller('listCtrl', listCtrl);
    listCtrl.$inject = ['$location', 'proizvodiService']

    function listCtrl($location, proizvodiService) {
        var vm = this;
        vm.sort = 'sifra';
        vm.inverse = true;
        var vrsta = $location.url();
        activate(vrsta);
        vm.back = back;
        vm.detailFmem = detailFmem;

        function back() {
            $location.path('/');
        };

        function detailFmem(index) {
            $location.path('/'+index.vrsta+ '/'+ index.id);
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


    };
})();