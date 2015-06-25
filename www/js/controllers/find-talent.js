talant.controller('FindTalentCtrl',['$scope', 'getInfo', function($scope, getInfo) {

    $scope.talents = [];

    getInfo.getTalents().then(function(data){
        $scope.talents = data;
        console.log(data);
    });

}]);

