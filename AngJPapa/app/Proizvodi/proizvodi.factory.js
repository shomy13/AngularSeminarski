(function () {
    angular
        .module('app')
        .factory('proizvodiService', proizvodiService);

    proizvodiService.$inject = ['$http'];

    function proizvodiService($http) {
        return {
            proizvodiRnd: proizvodiRnd,
            proizvodiAkcija: proizvodiAkcija,
            proizvodiById: proizvodiById,
            proizvodiByVrsta: proizvodiByVrsta,
            proizvodAdd: proizvodAdd
        };

        function proizvodiRnd() {
            return $http.get('http://localhost:8086/projekat/webapi/proizvodi/rnd')
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response.data;
            }

            function getFailed() {
                console.log('greska u komunikacji sa bazom')
            }

        };

        function proizvodiAkcija() {
            return $http.get('http://localhost:8086/projekat/webapi/proizvodi/akcija/rnd')
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response.data;
            }

            function getFailed() {
                console.log('greska u komunikacji sa bazom')
            }

        };

        function proizvodiById(id) {
            return $http.get('http://localhost:8086/projekat/webapi/proizvodi/' + id)
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response.data;
            }

            function getFailed() {
                console.log('greska u komunikaciji sa bazom')
            }
        };

        function proizvodiByVrsta(vrsta) {

            return $http.get('http://localhost:8086/projekat/webapi/proizvodi/p' + vrsta)
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response.data;
            }

            function getFailed() {
                console.log('greska u komunikaciji sa bazom');
            }
        };

        function proizvodAdd(proizvod) {
            console.log(proizvod);
            return $http.put('http://localhost:8086/projekat/webapi/proizvodi', proizvod)
                .then(putComplete)
                .catch(putFailed);

            function putComplete() {
                console.log("uspesno")
            }

            function putFailed() {
                console.log("neuspesno")
            }

        };

    }
})();