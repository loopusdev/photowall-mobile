angular.module('PhotoWall')
  .factory('services.rest', [
    '$http',   
    function($http) {

      var baseUrl = 'http://photowall-backend.herokuapp.com/';

      var getWall = function(name, callback, errorH) {
        $http({method: 'GET', url: baseUrl + 'wall/title/' + name})
          .success(callback)
          .error(errorH);
      };

      return {
        getWall: getWall,
      };
  }]);