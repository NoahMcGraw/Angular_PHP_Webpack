TopSaleAdmin.factory('BackBone', ['$http', function($http) {
    function _then(callback, data, error) {
        if (angular.isFunction(callback))
            callback(data, error);
    }

    var _getNav = function(options, callback) {
        var data = $.param({
            endpoint: 'Newsfeed/get/postID/' + options.postID
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('/modules/unisynAPI/request/', data, config).then(function(response) {
            var API = response.data;
            var error = '';
            var postDetailsJSON = '';
            var postDetails = {};
            try {
                error = API.error;
                postDetailsJSON = API.response;
                if ( typeof postDetailsJSON !== 'object' ) {
                    postDetails = JSON.parse(postDetailsJSON);
                }
                else {
                    postDetails = postDetailsJSON;
                }
            }
            catch(e) {
                console.error(e);
                console.error(error);
                console.error(API);
            }
            _then(callback, postDetails, error);
        },function(response) {
            // not logged in or no permission to access
            var API = response.data;
            var error = '';
            if ( typeof API === 'object' ) {
                error = API.error;
            }
            else {
                error = API;
            }
            console.log(error);
            // This is fine just logging for now but once the login is converted to angular, we should have this send them to login
            _then(callback, {}, error);
        });
    }



    return {
        getNav: _getNav,
    }
}]);
