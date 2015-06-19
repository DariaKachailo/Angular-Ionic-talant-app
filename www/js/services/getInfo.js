talant.factory('getInfo', [ '$http', '$q',  function($http, $q) {
    return {
        getProfile:  function(){
            var q = $q.defer();
            $http({
                method: "GET",
                url: './data/profile.json'
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
                url: './data/users.json'
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
                url: './data/members.json'
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
                url: './data/members.json'
            }).success(function(data){
                for(var i=0; i < data.length; i++) {
                    if (data[i].id == id) {
                        q.resolve(data[i]);
                    };
                };
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
    }
}]);