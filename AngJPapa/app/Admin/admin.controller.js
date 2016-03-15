(function () {
    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);
    adminCtrl.$inject = ['loginService', 'proizvodiService'];

    function adminCtrl(loginService, proizvodiService) {
        var vm = this;
        vm.dodaj = dodaj;
        vm.logout = logout;
        vm.GPU = GPU;
        vm.CPU = CPU;
        vm.Memory = Memory;
        vm.MBoard = MBoard;
        vm.RAM = RAM;
        vm.Monitor = Monitor;
        vm.Mouse = Mouse;
        vm.Keyboard = Keyboard;
        vm.FMem = FMem;
        vm.proizvod = proizvod;
        vm.show = false;
        vm.vrsta = '';
        vm.tip = tip;
        vm.showtip = false;
        vm.kapacitet = kapacitet;
        vm.showkapacitet = false;
        vm.socket = socket;
        vm.showsocket = false;
        vm.dijagonala = dijagonala;
        vm.showdijagonala = false;
        vm.takt = takt;
        vm.showtakt = false;

        function logout() {
            loginService.logout();
        }

        function dodaj(proizvod) {
            proizvodiService.proizvodAdd(proizvod);
        }

        function GPU() {
            vm.show = true;
            vm.showtip = false;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = true;
            return vm.vrsta = 'GPU';
        }

        function CPU() {
            vm.show = true;
            vm.showtip = true;
            vm.showsocket = true;
            vm.showtakt = true;
            vm.showdijagonala = false;
            vm.showkapacitet = false;
            return vm.vrsta = 'CPU';
        }

        function Memory() {
            vm.show = true;
            vm.showtip = true;
            vm.showkapacitet = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;

            return vm.vrsta = 'Memory';
        }

        function MBoard() {
            vm.show = true;
            vm.showkapacitet = true;
            vm.showsocket = true;
            vm.showtip = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            return vm.vrsta = 'MBoard';
        }

        function RAM() {
            vm.show = true;
            vm.showtip = true;
            vm.showkapacitet = true;
            vm.showtakt = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            return vm.vrsta = 'RAM';
        }

        function Monitor() {
            vm.show = true;
            vm.showtip = true;
            vm.showdijagonala = true;
            vm.showsocket = false;
            vm.showtakt = false;
            vm.showkapacitet = false;
            return vm.vrsta = 'Monitor';
        }

        function Mouse() {
            vm.show = true;
            vm.showtip = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = false;
            return vm.vrsta = 'Mouse';
        }

        function Keyboard() {
            vm.show = true;
            vm.showtip = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = false;
            return vm.vrsta = 'Keyboard';
        }

        function FMem() {
            vm.show = true;
            vm.showkapacitet = true;
            vm.showtip = false;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            return vm.vrsta = 'Fmem';
        }

        function proizvod() {
            if (vm.show) {
                return true;
            }
            return false;
        }

        function tip() {
            if (vm.showtip)
                return true;
            else
                return false;
        }

        function kapacitet() {
            if (vm.showkapacitet)
                return true;
            else
                return false;
        }

        function socket() {
            if (vm.showsocket)
                return true;
            else
                return false;
        }

        function dijagonala() {
            if (vm.showdijagonala)
                return true;
            else
                return false;
        }

        function takt() {
            if (vm.showtakt)
                return true;
            else
                return false;
        }
    }
})();