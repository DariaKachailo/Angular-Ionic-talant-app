talant.controller('SignUpCtrl',['$scope', 'localStorage', 'userService', function($scope,localStorage,userService) {
	$scope.newUser = {};
	var saveData = function (newUser) {
		var localUsers = localStorage.getObject('users');
		localUsers.push(newUser);
		localStorage.setObject('users', localUsers);
	};

	this.addNew = function(isValid) {
        if (isValid && ($scope.newUser.password == $scope.newUser.password_confirm)) {
            userService.register($scope.newUser.name, $scope.newUser.email, $scope.newUser.password).success(function(data){
                if (data.status) {
                    $state.go('blog');
                    localStorage.set('logged_in', true);
                    localStorage.set('user_id', data.data.user_id);
                    localStorage.set('remote_key', data.data.remote_key);
                } else {
                    $scope.showAlert();
                }
            });
        }
	};
}]);