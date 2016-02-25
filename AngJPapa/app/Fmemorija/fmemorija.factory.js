(function () {
    angular
        .module('app')
        .factory('myService', myService);

    myService.$inject = ['$http'];

    function myService($http) {
        return {
            FMemory: FMemory,
            find: find
        };

        function FMemory() {
            return $http.get('http://localhost:8086/projekat/webapi/fmemorija')
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response.data;
            };

            function getFailed() {
                console.log("greska")
            };
        };

        function find(sifra) {
            return $http.get('http://localhost:8086/projekat/webapi/fmemorija')
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                for (i = 0; i < response.data.length; i++) {
                    if (response.data[i].sifra === sifra) {
                        return response.data[i];
                    };
                };
            };

            function getFailed() {
                console.log("greska")
            };
        };
    };
})();