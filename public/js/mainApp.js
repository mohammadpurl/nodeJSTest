
var app=angular.module('myApp', ['ngRoute']);


app.config(
        function($routeProvider,$locationProvider){
            $routeProvider.
		
		when('/v1/humans', {
			templateUrl: 'humanlist.htm',
			controller: 'homeController'
		})
		.when('/v1/humans/:name/pets', {
			templateUrl: 'petslist.htm',
			controller: 'petController'
		})
		.when('/v1/humans/:name/cars', {
			templateUrl: 'carslist.htm',
			controller: 'carController'
		})
		.otherwise({
			redirectTo: '/'
		});
});
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
  /*$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});*/
 
}]);
