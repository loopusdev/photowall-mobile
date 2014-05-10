var app = angular.module('PhotoWall');

app.controller('MainCtrl', [
  '$scope',
  '$location',
  '$routeParams',
  'services.rest',
	function($scope, $location, $routeParams, rest) {

    $scope.wallName = $routeParams.wallName; // required

    $scope.wallId = $routeParams.wallId; // mandatory
    if (!$scope.wallId) {
      // If we do not have wallId, fetch it
      rest.getWall($scope.wallName, 
        function(data) {
          //$scope.$apply(function() {
            $scope.wallId = data.data.id;
          //});
        }, function(error) {
          alert('Error occured');
        });
    }

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