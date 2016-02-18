app.controller('listController',["$scope", "$location","$routeParams", "myService", function($scope, $location, $routeParams, myService){
    $scope.data = myService.getArtist();

    $scope.addArtist = function(){
       $location.path("/items/add");
    };
    $scope.editItem = function(ix){
        $location.path("/items/" + ix );

    };
}]);

app.controller('addController',["$scope", "$location","$routeParams", "myService", function($scope, $location, $routeParams, myService){
    $scope.add = function(){
        myService.addArtist({ name: $scope.item.name , genre: $scope.item.genre, rating: $scope.item.rating});
        $location.path("/items");
    };

    $scope.cancel = function(){
        $location.path("/items");
    };
    }]);

app.controller('editController',["$scope", "$location","$routeParams", "myService", function($scope, $location, $routeParams, myService){
    $scope.item = myService.getArtist()[parseInt($routeParams.indeks)];
    $scope.add = function(){
         myService.addArtist(parseInt($routeParams.indeks),{ name: $scope.item.name , genre: $scope.item.genre, rating: $scope.item.rating});

        $location.path("/items");
    };
    $scope.cancel = function(){
        $location.path("/items");
    };
    }]);
