(function () {
    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);
    adminCtrl.$inject = [ 'proizvodiService', '$location', 'korisnikService', 'loginService'];

    function adminCtrl( proizvodiService, $location, korisnikService, loginService) {
        var vm = this;
        vm.dodajP = dodajP;
        vm.dodajA = dodajA;
        vm.logout = logout;
        vm.admin = admin;
        vm.redUsers = redUsers;
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
        vm.showProizvod = showProizvod;
        vm.korisnik = korisnik;
        vm.showKorisnik = showKorisnik;
        vm.showP = false;
        vm.showK = false;
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
        vm.redPocetna = redPocetna;

        function logout() {
            loginService.logout();
        }

        function dodajP(proizvod) {
            return add(proizvod).then(function () {});

            function add(proizvod) {
                return proizvodiService.proizvodAdd(proizvod)
                    .then(function (data) {
                        vm.msgTxt = data;
                        return vm.msgTxt;
                    });
            }
        };
        
        function dodajA(korisnik){
             return add(korisnik).then(function () {});

            function add(korisnik) {
                return korisnikService.addAdmin(korisnik)
                    .then(function (data) {
                        vm.msgTxt = data;
                    if(vm.msgTxt == 'Uspesno dodat admin!'){
                        
                    
                        korisnik.ime = '';
                        korisnik.prezime = '';
                        korisnik.email = '';
                        korisnik.pass = '';
                        return vm.msgTxt;
                    }else{
                        korisnik.email = '';
                        return vm.msgTxt;
                    }
                    });
            }
        };
        
        function admin(){
            return '1';
        }
        
        function redUsers(){
            $location.path('/users')
        }

        function GPU() {
            vm.showtip = false;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = true;
        }

        function CPU() {
            vm.showtip = true;
            vm.showsocket = true;
            vm.showtakt = true;
            vm.showdijagonala = false;
            vm.showkapacitet = false;
        }

        function Memory() {
            vm.showtip = true;
            vm.showkapacitet = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
        }

        function MBoard() {
            vm.showkapacitet = true;
            vm.showsocket = true;
            vm.showtip = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
        }

        function RAM() {
            vm.showtip = true;
            vm.showkapacitet = true;
            vm.showtakt = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
        }

        function Monitor() {
            vm.showtip = true;
            vm.showdijagonala = true;
            vm.showsocket = false;
            vm.showtakt = false;
            vm.showkapacitet = false;
        }

        function Mouse() {
            vm.showtip = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = false;
        }

        function Keyboard() {
            vm.showtip = true;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
            vm.showkapacitet = false; 
        }

        function FMem() {
            vm.showkapacitet = true;
            vm.showtip = false;
            vm.showsocket = false;
            vm.showdijagonala = false;
            vm.showtakt = false;
        }

        function proizvod() {
            if (vm.showP)
                return true;
            else
                return false;
        }

        function korisnik() {
            if (vm.showK)
                return true;
            else
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

        function redPocetna() {
            $location.path('/pocetna')
        }

        function showProizvod() {
            vm.showP = true;
            vm.showK = false;
        }

        function showKorisnik() {
            vm.showK = true;
            vm.showP = false;
        }
    }
})();