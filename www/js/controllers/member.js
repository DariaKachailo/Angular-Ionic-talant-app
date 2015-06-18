talant.controller('MembersCtrl',['$scope', 'localStorage', 'getInfo','$stateParams', function($scope, localStorage, getInfo,$stateParams) {

    $scope.member = {};
    // var localMember = localStorage.getObject('members');

    // var getUser = function(){
    //     var memberId = $stateParams.memberId;
    //     //тут будет запрос на получение пользователя по айди 
    //     getInfo.getMember(memberId).then(function(data){
    //         $scope.member = data;
    //         console.log(data);
    //     });
    // };
    getInfo.getMember().then(function(data){
        $scope.member = data;
        // localStorage.setObject('members', data);
        console.log($scope.member);
    });

    // $scope.$on('$ionicView.beforeEnter', function(){
    //     getUser();
    // });
}]);
