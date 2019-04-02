angular.module('app').directive('nav', function() {
    var directive = {
        restrict: 'E',
        templateUrl: '/src/partial/nav.html',
        controller: 'navCtrl',
    };
    return directive;
});
