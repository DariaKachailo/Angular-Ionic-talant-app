talant.factory('userService', ['$http', function($http){
    return {
        login: function(email, password){
            return $http({
                method: "POST",
                url: 'http://#',
                data: {login: email, password: password},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            });
        },
        register: function(name, email, password){
            return $http({
                url: 'http://#',
                data: {email: email, password: password, name: name},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            });
        },
        logout: function(){
            return $http({
                method: "POST",
                url: 'http://#',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            });
        },
        syncSocial: function(name, social_type, social_id){
            return $http({
                method: "POST",
                url: 'http://#',
                data: {name: name, social_id: social_id, social_type: social_type},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            });
        },
        syncSocialWithEmail: function(name, social_id, social_type, email){
            return $http({
                method: "POST",
                url: 'http://#',
                data: {name: name, social_id: social_id, social_type: social_type, email: email},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            });
        }
    };
}]);