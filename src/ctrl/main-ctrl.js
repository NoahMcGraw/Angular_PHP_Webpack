angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
    $scope.dataLoaded = false;

    function init() {
        dataLoaded();
    }

    init();

    function dataLoaded() {
        $scope.dataLoaded = true;
    }
}])
