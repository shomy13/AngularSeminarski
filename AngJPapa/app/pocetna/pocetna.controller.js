(function () {
    angular
        .module('app')
        .controller('pocetnaCtrl', pocetnaCtrl);
    pocetnaCtrl.$inject = ['$location', 'loginService', 'proizvodiService']

    function pocetnaCtrl($location, loginService, proizvodiService) {
        var vm = this;
        vm.msgTxt = '';
         vm.redMemory = redMemory;
        vm.redFMem = redFMem;
        vm.redRAM = redRAM;
        vm.redMBoard = redMBoard;
        vm.redCPU = redCPU;
        vm.redGPU = redGPU;
        vm.redMouse = redMouse;
        vm.redKBoard = redKBoard;
        vm.redMonitor = redMonitor;
        vm.login = login;
        vm.detail = detail;
        activatePRnd();
        activatePAkcija();
        CarouselDemoCtrl();

        function redMemory() {
            $location.path("/Memory")
            
        }
          function redFMem() {
            $location.path("/FMem")
            
        }
          function redRAM() {
            $location.path("/RAM")
            
        }
          function redMBoard() {
            $location.path("/MBoard")
            
        }
          function redCPU() {
            $location.path("/CPU")
            
        }
          function redGPU() {
            $location.path("/GPU")
            
        }
          function redMouse() {
            $location.path("/Mouse")
            
        }
          function redKBoard() {
            $location.path("/Keyboard")
            
        }
          function redMonitor() {
            $location.path("/Monitor")
            
        }

        function login(user) {
            return loginFun(user).then(function () {});

            function loginFun(user) {
                return loginService.login(user)
                    .then(function (data) {
                        vm.msgTxt = data;
                        return vm.msgTxt;

                    })
            }
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
        }

        function detail(id) {
            $location.path('/' + id.vrsta + '/' + id.id);
        };
        
        function CarouselDemoCtrl(){
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
      image: 'Img/zaglavlje_Microsoft_2.JPG'
    }
  ];
}

    };
})();