(function () {
    angular
        .module('app')
        .factory('sessionService', sessionService);

    function sessionService() {
        
        return {
            set: set,
            get: get,
            destroy: destroy
        };

        function set(key, value) {
            return localStorage.setItem(key, value);
        }

        function get(Key) {
            return localStorage.getItem(Key);
        }

        function destroy(key) {
            return localStorage.removeItem(key);
        }
    }
})();