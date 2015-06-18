talant.controller('ProfileCtrl',['$scope', '$http', 'localStorage', 'getInfo', function($scope, $http, localStorage, getInfo) {

    $scope.profile = {};
    var localProfile = localStorage.getObject('profile');

    getInfo.getProfile().then(function(data){
        $scope.profile = data;
        localStorage.setObject('profile', data);
    });
}]);