talant.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  // $scope.attendees = [
  //   { firstname: 'Nicolas', lastname: 'Cage' },
  //   { firstname: 'Jean-Claude', lastname: 'Van Damme' },
  //   { firstname: 'Keanu', lastname: 'Reeves' },
  //   { firstname: 'Steven', lastname: 'Seagal' }
  // ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});