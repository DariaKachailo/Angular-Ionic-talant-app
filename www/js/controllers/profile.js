talant.controller('ProfileCtrl',['$scope', '$http', 'localStorage', function($scope, $http, localStorage) {

  $scope.profileM = [];

    (function(){
        var localProfile = localStorage.getObject('profile');
        if (localProfile) {
            $scope.profileM = localProfile;

        } else {
            $http({
                method: 'GET',
                url: './data/profile.json'
            }).success(function(data){
                $scope.profileM = data;
                localStorage.setObject('profile', data);
            });
        }
    })();
    console.log($scope.profileM);

}]);