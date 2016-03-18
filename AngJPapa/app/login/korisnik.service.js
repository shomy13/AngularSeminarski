(function(){
    angular
    .module('app')
    .factory('korisnikService', korisnikService);
    
    korisnikService.$inject = ['$http']
    
    function korisnikService($http){
        var vm = this;
        
        return{
            addAdmin : addAdmin
        };
        
          function addAdmin(korisnik) {
            return $http.put('http://localhost:8086/projekat/webapi/korisnik/admin', korisnik)
                .then(putCompleted)
                .catch(putFailed);
            
            function putCompleted(response){
                if(response.data == 'true'){
                    vm.msgTxt = 'Uspesno dodat admin!'
                    return vm.msgTxt;
                }else{
                    vm.msgTxt = 'Korisnik vec postoji!'
                    return vm.msgTxt;
                }
            }
            
            function putFailed(){
                console.log('Greska u komunikaciji sa bazom')
            }
        };
    }
})();