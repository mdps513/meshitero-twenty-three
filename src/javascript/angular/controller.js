let angModule = require('./module');

angModule.angApp.controller("webpackEnvironmentCtrl", ['$scope', '$interval', function( $scope, $interval ) {
    $scope.count = 0;
    var timer = $interval(function() {
        $scope.count = (new Date()).toLocaleTimeString();
    }, 1000);
}]);