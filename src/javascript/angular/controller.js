let angModule = require('./module');
require('./config');

angModule.angApp.controller("webpackEnvironmentCtrl", ['$scope', "$log", function($scope, $log) {
    $scope.init = function() {
        $log.debug('Webpack Environment!!!!!!!!!!!');
        $scope.demo = 'Webpack Environment!!!!!!!!!!!';
    };

}]);