talant.controller('FriendsCtrl',['$scope', 'localStorage', 'getInfo', function($scope, localStorage, getInfo) {

    $scope.members = {};
    var localMembers = localStorage.getObject('members');

    getInfo.getMembers().then(function(data){
        $scope.members = data;
        localStorage.setObject('members', data);
        console.log(data);
    });
}]);