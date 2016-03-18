(function () {
    angular
        .module('app')
        .controller('pocetnaCtrl', pocetnaCtrl);
    pocetnaCtrl.$inject = ['$location', 'loginService', 'proizvodiService']

    function pocetnaCtrl($location, loginService, proizvodiService) {
        var vm = this;
        vm.msgTxt = '';

        vm.login = login;
        vm.logOut = logOut;
        vm.detail = detail;
        vm.logedIn = logedIn;
        vm.signUp = signUp;
        vm.RedKorisnik = RedKorisnik;
        vm.showAdmin = showAdmin;
        vm.redAdmin = redAdmin;
        activatePRnd();
        activatePAkcija();
        CarouselCtrl();

        function login(user) {
            return loginFun(user).then(function () {});

            function loginFun(user) {
                return loginService.login(user)
                    .then(function (data) {
                    vm.msgTxt = data;
                    if(data == 'Uspesna prijava!'){
                        user.email = '';
                        user.pass = '';
                        return vm.msgTxt;
                    }else{
                        return vm.msgTxt;
                    }
                        
                        

                    })
            }
        };

        function logOut() {
            loginService.logout();

        };

        function activatePRnd() {
            return getProizvodRnd().then(function () {});


            function getProizvodRnd() {
                return proizvodiService.proizvodiRnd()
                    .then(function (data) {
                        vm.proizvodiRnd = data;

                        return vm.proizvodiRnd;
                    })
            }
        };

        function activatePAkcija() {
            return getproizvodAkcija().then(function () {});

            function getproizvodAkcija() {
                return proizvodiService.proizvodiAkcija()
                    .then(function (data) {
                        vm.proizvodiAkcija = data;
                        return vm.proizvodiAkcija;
                    })
            }
        };

        function detail(object) {
            $location.path('/' + object.vrsta + '/' + object.id);
        };

        function CarouselCtrl() {
            vm.myInterval = 3000;
            vm.slides = [
                {
                    image: 'Img/Brands we buy.jpg'
    },
                {
                    image: 'Img/compsystems.JPG'
    },
                {
                    image: 'Img/IT_security_banner.jpg'
    },
                {
                    image: 'Img/The-IT-Crowd-Banner.png'
    },
                {
                    image: 'Img/Technology-Partners-Banner-1000x250.jpg'
    }
  ];
        };

        function logedIn() {
            if (loginService.islogged())
                return false
            else
                return true
        };

        function signUp(user) {
            return signUpFun(user).then(function () {});

            function signUpFun(user) {
                return loginService.signUp(user)
                    .then(function (data) {
                        vm.msgTxt = data;
                        return vm.msgTxt;
                    })
            }
        };

        function RedKorisnik() {
            $location.path('/korisnik')
        }

        function showAdmin() {
            if (loginService.isAdmin())
                return true;
            else
                return false;
        }
        
        function redAdmin(){
            $location.path('/admin')
        }

    };


})();