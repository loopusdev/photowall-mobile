angular.module('PhotoWall')
  .factory('services.recentWalls', [
    '$window',
    function($window) {

      var recentWalls = angular.fromJson($window.localStorage.getItem('photoWallRecentWalls'));
      console.log(recentWalls);
      if (!(recentWalls instanceof Array)) {
        recentWalls = [];
      }

      // Update list of recent walls
      var addWall = function(wallName) {
        if (recentWalls.indexOf(wallName) < 0) {
          if (recentWalls >= 4) {
            recentWalls.pop();
          }
          recentWalls.unshift(wallName);
          $window.localStorage.setItem('photoWallRecentWalls', angular.toJson(recentWalls));
        }
      };

      var getWalls = function() {
        return recentWalls;
      };

      return {
        addWall: addWall,
        getWalls: getWalls,
      };
  }]);