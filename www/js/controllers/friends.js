talant.controller('FriendsCtrl',['$scope', '$http', 'localStorage', function($scope, $http, localStorage) {

	$scope.friends = [];

    (function(){
        var localFriends = localStorage.getObject('users');
        if (localFriends) {
            $scope.friends = localFriends;

        } else {
            $http({
                method: 'GET',
                url: './data/users.json'
            }).success(function(data){
                $scope.friends = data;
                localStorage.setObject('users', data);
            });
        }
    })();

}]);