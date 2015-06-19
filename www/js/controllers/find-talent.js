talant.controller('FindTalentCtrl',['$scope', 'localStorage', 'getInfo', function($scope, localStorage, getInfo) {

    $scope.talents = {};
    var localTalants = localStorage.getObject('users');

    getInfo.getTalents().then(function(data){
        $scope.talents = data;
        localStorage.setObject('users', data);
    });
}]);