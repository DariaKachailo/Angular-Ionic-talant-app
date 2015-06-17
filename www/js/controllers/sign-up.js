talant.controller('SignUpCtrl',['$scope', 'localStorage', function($scope,localStorage) {
	$scope.newUser = {};
	var saveData = function (newUser) {
		var localUsers = localStorage.getObject('users');
		localUsers.push(newUser);
		localStorage.setObject('users', localUsers);
	};

	this.addNew = function(isValid) {
		if (isValid) {
			$scope.users.push(this.newUser);
			saveData(this.newUser);
			this.newUser = {};
		}
	};
}]);