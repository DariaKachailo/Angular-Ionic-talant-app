talant.controller('FindTalentCtrl',['$scope', '$http', 'localStorage', function($scope, $http, localStorage) {

	$scope.users = [];

    (function(){
        var localUsers = localStorage.getObject('users');
        if (localUsers) {
            $scope.users = localUsers;

        } else {
            $http({
                method: 'GET',
                url: './data/users.json'
            }).success(function(data){
                $scope.users = data;
                localStorage.setObject('users', data);
            });
        }
    })();

}]);