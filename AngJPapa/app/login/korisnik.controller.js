(function(){
    angular
        .module('app')
        .controller('korisnikCtrl', korisnikCtrl);
    korisnikCtrl.$inject=['loginService','sessionService']    
    function korisnikCtrl(loginService, sessionService){
        var vm =this;
        var id = sessionService.get('id');
        console.log("s"+id)
        korisnik(id);
        
        function korisnik(id){
            return getKorisnik(id).then(function(){});
        
            function getKorisnik(id){
                console.log("id"+id)
                return loginService.korisnikById(id)
                .then(function(data){
                    vm.korisnik = data;
                    return vm.korisnik;
                })
            }
        };
        
    }
})();