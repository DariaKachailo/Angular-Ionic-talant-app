talant.controller('ProfileCtrl',['$scope', '$http', 'localStorage', 'getInfo', function($scope, $http, localStorage, getInfo) {

    $scope.profile = {};
    var localProfile = localStorage.getObject('profile');

    getInfo.getProfile().then(function(data){
        $scope.profile = data;
        localStorage.setObject('profile', data);
    });

    $scope.increment = function(profile,localProfile){
		profile.likes ++;
		localProfile = profile;
    	localStorage.setObject('profile', localProfile);
    	console.log(localProfile);
    };
}]);