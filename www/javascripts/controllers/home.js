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
              $location.url('/main/' + $scope.wallName + '?wallId=' + data.data.id);
            }, function(error) {
              if (error.status == false) {
                alert('There is no wall with name' + $scope.wallName);
              } else {
                alert('Error occured');
              }
            });
        }
      };

    }
  ]);