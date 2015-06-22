talant.controller('FriendsCtrl',['$scope', 'getInfo', function($scope, getInfo) {

    $scope.members = {};

    getInfo.getMembers().then(function(data){
        $scope.members = data;
    });
}]);