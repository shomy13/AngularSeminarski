var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/items", {
        templateUrl: "view-list.html",
        controller: "listController"
    }).when("/items/add", {
        templateUrl: "view-details.html",
        controller: "addController"

    }).when("/items/:indeks", {
        templateUrl: "view-details.html",
        controller: "editController"

    }).otherwise({
       redirectTo:"/items"
    })

});

app.factory("myService",["$rootScope", function($rootScope){
    var svc = {};
    var data =[
        {name: "Mimi",
         genre: "Guda",
         rating: "5"
        },
        {
        name: "Perica",
         genre: "Jovica",
         rating: "4"
        },
        {
            name: "Mujo",
         genre: "Haso",
         rating: "3"
        },
    ];
    svc.getArtist = function(){
        return data;

    };

    svc.addArtist = function(artist){
        data.push(artist);
    };

    svc.editArtist = function(index, artist){
        data[index] = artist;

    };
    return svc;
}]);
