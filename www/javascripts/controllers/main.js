var app = angular.module('PhotoWall');

app.controller('MainCtrl', [
  '$scope',
  '$location',
	function($scope, $location) {

    $scope.msg = 'No photo taken yet';

    $scope.goToHome = function() {
      $location.url('/');
    };

		$scope.takePhoto = function(imgId) {
      navigator.camera.getPicture(
        function(imageData) { // On success
          $scope.$apply(function() {
            // Display photo
            $scope.newPhotoSrc = 'data:image/jpeg;base64,' + imageData;
          });
          // Send photo to server
          // TODO: implement
        }, function(message) { // On failure
          alert('Failed because: ' + message);
        }, { 
          quality: 50,
          targetWidth: 300,
          targetHeight: 300,
          destinationType: Camera.DestinationType.DATA_URL
        }
      );
    };

	}
]);