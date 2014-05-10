var app = angular.module('MyApp');

app.controller('MainCtrl', [
  '$scope',
	function($scope) {
		$scope.msg = 'This is my app!';
	}
]);