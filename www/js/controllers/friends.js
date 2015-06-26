talant.controller('FriendsCtrl',['$scope', 'getInfo', function($scope, getInfo) {

    $scope.members = {};

    getInfo.getMembers().then(function(data){
    	console.log(data);
        $scope.members = data;
    });
}]);