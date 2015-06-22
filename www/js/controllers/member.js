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
    });;

    $scope.likes = function(member){
        var localMembers = localStorage.getObject('members');
        $scope.member = localMember;
            for( var i=0; i < localMembers.length; i++) {
                var localMember = localMembers[i];
                if(localMember.memberId == member.memberId){
                    localMember.likes ++;
                    console.log(localMember);
                    $scope.member = localMember;

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
