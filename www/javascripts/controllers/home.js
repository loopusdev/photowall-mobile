angular.module('PhotoWall')
  .controller('HomeCtrl', [
    '$scope',
    '$location',
    'services.rest',
    function($scope, $location, rest) {

      $scope.goToMain = function() {
        if ($scope.wallName != undefined) {
          // Check if wall name is valid
          rest.getWall($scope.wallName, 
            function(data) {
              var url = '/main/' + $scope.wallName + '?wallId=' + data.data.id;
              //$location.url(url);
              steroids.layers.push(new steroids.views.WebView('/index.html#' + url));
            }, function(error) {
              if (error.status == false) {
                alert('There is no wall with name ' + $scope.wallName);
              } else {
                alert('Error occured');
              }
            });
        }
      };

    }
  ]);