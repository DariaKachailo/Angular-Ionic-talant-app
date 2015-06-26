talant.factory('getInfo', [ '$http', '$q', function($http, $q) {
    var LOCALHOST = 'http://localhost:3000';

    return {
        getProfile:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: LOCALHOST + '/getProfile'
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        },

        getTalents:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: LOCALHOST + '/getTalents'
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        },

        getMembers:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: LOCALHOST + '/getMembers'
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        },

        getMember:  function(id){
            var q = $q.defer();
            $http({
                method: "GET",
                url: LOCALHOST + '/getMember/' + id
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        },

        getPhotos:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: './data/photos.json'
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        },

        getMessengers:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: './data/messengers.json'
            }).success(function(data){
                q.resolve(data);
            }).error(function(error){
                q.reject(error);
            });
            return q.promise;
        }
        // }, 

        // like: function(){
        //     var q = $q.defer();
        //     console.log(id);
        //     $http({
        //         method: "POST",
        //         url: LOCALHOST + '/member/like'
        //     }).success(function(data){
        //         q.resolve(data);
        //     }).error(function(error){
        //         q.reject(error);
        //     });
        //     return q.promise;
        // }
    };
}]);