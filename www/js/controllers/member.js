talant.controller('MembersCtrl',['$scope', 'localStorage', 'getInfo','$stateParams', function($scope, localStorage, getInfo,$stateParams) {

    $scope.member = {};

    var getUser = function(){
        var memberId = $stateParams.memberId;
        getInfo.getMember(memberId).then(function(data){
            $scope.member = data;
        });
    };

    $scope.$on('$ionicView.beforeEnter', function(){
        getUser();
    });
}]);
