angular.module('app').controller('navCtrl', ['$scope', 'BackBone', '$mdDialog', function($scope, BackBone, $mdDialog) {
    $scope.dataLoaded = false;
    $scope.nav = {
        loading: false,
        error: '',
        links: [],
    };

    function init() {
        BackBone.getNav({}, function(navItems, error) {
            if (typeof error !== 'undefined' && error.length) {
                $scope.nav.error = error;
                $mdDialog.show({
                    contentElement: '#mainContainer',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose: true
                })
            }
            else {
                $scope.nav.links = navItems;
                dataLoaded();
            }
        })
    }

    init();

    function dataLoaded() {
        $scope.dataLoaded = true;
    }
}])
