talant.controller('ProfileCtrl',['$scope', 'getInfo', function($scope, getInfo) {

    $scope.profile = {};

    getInfo.getProfile().then(function(data){
        $scope.profile = data;
    });
}]);