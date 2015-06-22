talant.controller('PhotosCtrl',['$scope', 'localStorage', 'getInfo', function($scope, localStorage, getInfo) {

    $scope.photos = {};
    // var localPhotos = localStorage.getObject('photos');

    getInfo.getPhotos().then(function(data){
        $scope.photos = data;
        // localStorage.setObject('photos', data);
    });
}]);