angular.module('PhotoWall')
  .controller('HomeCtrl', [
    '$scope',
    '$location',
    function($scope, $location) {

      $scope.goToMain = function() {
        // Check if wall name is valid
        
        
        $location.url('/main');
      };

    }
  ]);