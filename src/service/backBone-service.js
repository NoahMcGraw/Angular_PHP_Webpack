angular.module('app').factory('BackBone', ['$http', function($http) {
    function _then(callback, data, error) {
        if (angular.isFunction(callback))
            callback(data, error);
    }

    var _getNav = function(options, callback) {
        var data = $.param({
            endpoint: 'nav',
            method: 'get'
        });

        var config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }

        $http.post('/api/route.php', data, config).then(function(response) {
            var data = response.data;
            console.log(data)
            var error = '';
            var navJSON = '';
            var nav = [];
            try {
                error = response.error;
                navJSON = data;
                if ( !Array.isArray(navJSON) ) {
                    nav = JSON.parse(navJSON);
                }
                else {
                    nav = navJSON;
                }
            }
            catch(e) {
                console.error(e);
                console.error(error);
                console.error(data);
            }
            _then(callback, nav, error);
        })
    }

    return {
        getNav: _getNav,
    }
}]);
