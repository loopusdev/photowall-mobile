var app = angular.module('PhotoWall');

app.controller('MainCtrl', [
  '$scope',
  '$location',
  '$routeParams',
  'services.rest',
  '$timeout',
	function($scope, $location, $routeParams, rest, $timeout) {

    $scope.wallName = $routeParams.wallName; // required

    $scope.showPhotoSentMessage = false;

    // Set navbar
    var backButton = new steroids.buttons.NavigationBarButton();
    backButton.title = 'Back';
    steroids.view.navigationBar.update({
      title: $scope.wallName,
      backButton: backButton,
    });

    $scope.wallId = $routeParams.wallId; // mandatory
    if (!$scope.wallId) {
      // If we do not have wallId, fetch it
      rest.getWall($scope.wallName, 
        function(data) {
          $scope.wallId = data.data.id;
        }, function(error) {
          alert('Error occured');
        });
    }

    $scope.goToHome = function() {
      $location.url('/');
    };

		$scope.takePhoto = function() {
      navigator.camera.getPicture(
        function(imageData) { // On success
          var base64URI = 'data:image/jpeg;base64,' + imageData;
          $scope.$apply(function() {
            // Display photo
            $scope.newPhotoSrc = base64URI;
            // Show message and remove it after 3 secs
            $scope.showPhotoSentMessage = true;
            $timeout(function() { $scope.showPhotoSentMessage = false; }, 3000);
          });
          // Send photo to server
          rest.uploadPhoto(base64URI, function(data) {
            // Post photo to wall
            rest.postPhoto($scope.wallId, data.data.url);
          });
        }, function(message) {
          // On failure
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