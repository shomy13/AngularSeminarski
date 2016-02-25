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
            return sessionStorage.setItem(key, value);
        }

        function get(Key) {
            return sessionStorage.getItem(Key);
        }

        function destroy(key) {
            return sessionStorage.removeItem(key);
        }
    }
})();