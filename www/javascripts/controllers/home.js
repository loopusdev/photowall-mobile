angular.module('PhotoWall')
  .controller('HomeCtrl', [
    '$scope',
    '$location',
    'services.rest',
    '$window',
    'services.recentWalls',
    function($scope, $location, rest, $window, recentWalls) {

      $scope.recentWalls = recentWalls.getWalls();

      $scope.goToMain = function(wallName) {
        wallName = wallName || $scope.wallName;
        if (wallName != undefined) {
          // Check if wall name is valid
          rest.getWall(wallName, 
            function(data) {
              var url = '/main/' + wallName + '?wallId=' + data.data.id;
              //$location.url(url);
              steroids.layers.push(new steroids.views.WebView('/index.html#' + url));
              // Update list of recent walls
              recentWalls.addWall(wallName);
            }, function(error) {
              if (error.status == false) {
                alert('There is no wall with name ' + wallName);
              } else {
                alert('Error occured');
              }
            });
        }
      };

    }
  ]);