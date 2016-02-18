var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "pocetna.html",
        controller: "flashMCtrl"

    }).when("/fmem",{
        templateUrl: "view-list-fmem.html",
        controller: "flashMCtrl"
    }).when("/fmem/:index",{
        //preko parametra
       // templateUrl: "view-detail-fmem1.html",
     //  controller: "detailCtrl"
        //preko metode sa resta
        templateUrl: "view-detail-fmem.html",
       controller: "bySifraCtrl"
    }).otherwise({
        redirectTo: "/"
    })

});

app.factory('myService' ,[ '$http', function($http){

 return {
          list: function(callback){
            $http.get('http://localhost:8086/projekat/webapi/fmemorija').success(callback);
          },
          find: function(name, callback){
            $http.get('http://localhost:8086/projekat/webapi/fmemorija').success(function(data){
                var fmemories = data.filter(function(entry){
                    return entry.sifra === name;
                })[0];
               callback(fmemories);

            }) ;
          }
          };

    }]);


