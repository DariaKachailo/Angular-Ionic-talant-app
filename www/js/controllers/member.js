talant.controller('MembersCtrl',['$scope', 'localStorage', 'getInfo','$stateParams', '$http', function($scope, localStorage, getInfo,$stateParams,$http) {

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

    $scope.likes = function(member){
        var localMembers = localStorage.getObject('members');
            for( var i=0; i < localMembers.length; i++) {
                if(localMembers[i].memberId == member.memberId){
                    localMembers[i].likes ++;
                    $scope.member = localMembers[i];
                }
            }
        localStorage.setObject('members', localMembers);
    };

    // $scope.member = localMembers

    (function(){
        var localMembers = localStorage.getObject('members');
        if (localMembers) {
            $scope.members = localMembers;
        } else {
            $http({
                method: 'GET',
                url: './data/members.json'
            }).success(function(data){
                $scope.members = data;
                localStorage.setObject('members', data);
            });
        }
    })();
}]);
