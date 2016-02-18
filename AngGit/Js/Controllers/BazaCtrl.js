app.controller('flashMCtrl',["$scope","$location","$routeParams" ,"myService",function($scope,$location, $routeParams, myService){
 //$http.get('http://localhost:8086/projekat/webapi/fmemorija').success(function(data){
              // $scope.flashMemories=data;
              //  });
    myService.list(function(data){
       $scope.flashMemories = data;
    });

                 $scope.sort='sifra';
                 $scope.inverse=true;

        $scope.redFmem= function(){
            $location.path("/fmem");
        };
       $scope.detailFmem = function(ix){
          $location.path("/fmem/"+ix);

        };
    $scope.back = function(){
        $location.path("/")
    }


}]);

app.controller('detailCtrl',['$scope',  '$routeParams', 'myService','$location' , function($scope,  $routeParams, $myService, $location){

    $myService.find($routeParams.index, function(data){
        $scope.flashMem = data;

              $scope.naAkciji = function(){
//        console.log("u funkciji");
      if($scope.flashMem.akcija == 1){
          return "da";
      }else{
          return "ne";
          }

    }; });


          $scope.kupi = function(){
        $location.path("/fmem");
    };

}]);

app.controller('bySifraCtrl',['$http', '$scope', '$routeParams','$location', function($http, $scope, $routeParams, $location){

 $http.get('http://localhost:8086/projekat/webapi/fmemorija/'+$routeParams.index).success(function(data){
//   console.log("http done");
        $scope.flashBySifra = data;
         $scope.naAkciji = function(){
//        console.log("u funkciji");
      if($scope.flashBySifra.akcija == 1){
          return "da";
      }else{
          return "ne";
          }

    };

    });

    $scope.kupi = function(){
        $location.path("/fmem");
    };





}]);

