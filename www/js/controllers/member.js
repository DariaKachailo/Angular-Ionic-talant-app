talant.controller('MembersCtrl',['$scope', '$http', 'localStorage', function($scope, $http, localStorage) {

  $scope.members = [];

    (function(){
        var localMembers = localStorage.getObject('members');
        if (localMembers) {
            $scope.members = localMembers;

        } else {
            $http({
                method: 'GET',
                url: './data/members.json'
            }).success(function(data){
                $scope.members = data;
                localStorage.setObject('members', data);
            });
        }
    })();
    console.log($scope.members);

}]);
