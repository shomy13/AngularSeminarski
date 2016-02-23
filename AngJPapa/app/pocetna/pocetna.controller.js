(function () {
    angular
        .module('app')
        .controller('pocetnaCtrl', pocetnaCtrl);
    pocetnaCtrl.$inject = ['$location']

    function pocetnaCtrl($location) {
        var vm = this;

        vm.redFmem = function () {
            $location.path("/fmem")
        };
    };
})();