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

      /**
       * Upload photo to cloud, url is returned. Photo is not connected to any wall yet.
       */
      var uploadPhoto = function(base64URI, callback, errorH) {
        $http({method: 'POST', url: 'http://photowall-backend.herokuapp.com/photo/upload',
          data: { imageData: base64URI }})
          .success(callback)
          .error(errorH);
      };

      /**
       * Post photo to wall. Url is one that was obtained when posting photo to cloud.
       */
      var postPhoto = function(wallId, url, callback, errorH) {
        $http({method: 'POST', url: 'http://photowall-backend.herokuapp.com/photo',
          data: { url: url, wallId: wallId }})
          .success(callback)
          .error(errorH);
      };

      return {
        getWall: getWall,
        uploadPhoto: uploadPhoto,
        postPhoto: postPhoto,
      };
  }]);