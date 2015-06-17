talant.controller('MessangerCtrl',['$scope', function($scope) {
  
    $scope.data = {
        showDelete: false
    };
      
    $scope.edit = function(user) {
        alert('Edit User: ' + user.id);
    };

    $scope.share = function(user) {
        alert('Share User: ' + user.id);
    };
      
    $scope.moveUser = function(user, fromIndex, toIndex) {
        $scope.users.splice(fromIndex, 1);
        $scope.users.splice(toIndex, 0, user);
    };
      
    $scope.onUserDelete = function(user) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        console.log('thus');
    };
  
  $scope.users = [
        { 
            id: 0,
            name: 'Stanislav',
            image: '/img/ionic.png'
        },{ 
            id: 1,
            name: 'Eugene',
            image: '/img/ionic.png'
        },{
            id: 2,
            name: 'Olga',
            image: '/img/ionic.png'
        },{
            id: 3,
            name: 'Daria',
            image: '/img/ionic.png'
        },{ 
            id: 4,
            name: 'Bogdan',
            image: '/img/ionic.png'
        },{
            id: 5,
            name: 'Ljubava',
            image: '/img/ionic.png'
        },{
            id: 6,
            name: 'Sofia',
            image: '/img/ionic.png'
        }
    ]; 
}]);