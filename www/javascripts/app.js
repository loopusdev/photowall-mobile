var app = angular.module('PhotoWall', [
  'ngResource',
  'ngRoute',
  'ngTouch',
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/main/:wallName/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function() {
  steroids.view.navigationBar.show("PhotoWall");

  // Set the WebView background color to white (effective on iOS only)
  steroids.view.setBackgroundColor("#FFFFFF");
});
