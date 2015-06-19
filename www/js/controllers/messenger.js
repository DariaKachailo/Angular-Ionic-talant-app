talant.controller('MessengerCtrl',['$scope', 'localStorage', 'getInfo', function($scope, localStorage, getInfo) {
  
    $scope.data = {
        showDelete: false
    };
          
    $scope.onUserDelete = function(messenger) {
        $scope.messengers.splice($scope.messengers.indexOf(messenger), 1);
    };

    $scope.messengers = {};
    var localMessegers = localStorage.getObject('messengers');

    getInfo.getMessengers().then(function(data){
        $scope.messengers = data;
        localStorage.setObject('messengers', data);
        console.log(data);
    });
}]);