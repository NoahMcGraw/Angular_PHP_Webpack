angular.module('app').factory('BackBone', ['$http', function($http) {
    function _then(callback, data, error) {
        if (angular.isFunction(callback))
            callback(data, error);
    }

    var _getNav = function(options, callback) {
        
    }



    return {
        getNav: _getNav,
    }
}]);
