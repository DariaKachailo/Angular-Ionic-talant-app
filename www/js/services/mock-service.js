talant.factory('MockService', ['$http', '$q', function($http, $q) {
    var me = {};

    me.getUserMessages = function(d) {
      
      var endpoint =
        'http://www.mocky.io/v2/547cf341501c337f0c9a63fd?callback=JSON_CALLBACK';
      return $http.jsonp(endpoint).then(function(response) {
        return response.data;
      }, function(err) {
        console.log('get user messages error, err: ' + JSON.stringify(
          err, null, 2));
      });
      
      var deferred = $q.defer();
      
     setTimeout(function() {
        deferred.resolve(getMockMessages());
      }, 1500);
      
      return deferred.promise;
    };

    me.getMockMessage = function() {
      return {
        userId: '1',
        date: new Date(),
        text: 'Как дела?'
      };
    }

    return me;
  }
]);