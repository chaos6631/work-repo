// Create the module and name it app
var app = angular.module('app', ['ngRoute', 'appAnimations']);





app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.otherwise("/");
			$routeProvider.				
				when('/', {					
					templateUrl: "templates/home.html",
					controller: "homeController"
				}).					
				when('/about', {
					templateUrl: "templates/about.html",
					controller: "aboutController"
				}).				
				when('/contact', {					
					templateUrl: "templates/contact.html",
					controller: "contactController"
				}).
				when('/news', {					
					templateUrl: "templates/news.html",
					controller: "newsController"
				}).
				when('/projects', {					
					templateUrl: "templates/projects.html",
					controller: "projectsController"
				}).
				when('/team', {					
					templateUrl: "templates/team.html",
					controller: "teamController"
				});
	}]);

app.controller('homeController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('aboutController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('contactController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('newsController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('projectsController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('teamController', function($scope){
	$scope.hello = "Hello I am Working!";
});
// Create the home page controller
// .controller('homeController', function ($scope) {
// 	$scope.message = "Home Page Test Message";
// });