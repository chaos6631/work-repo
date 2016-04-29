// Create the module and name it app
var app = angular.module('app', ['ngRoute', 'appAnimations', 'angular-scroll-animate']);


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
					controller: "newsController",
					templateUrl: "templates/news.html"
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

/************************
	Controllers
***************************/

app.controller('homeController', function($scope, $http){
	
});

app.controller('aboutController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('contactController', function($scope){
	$scope.hello = "Hello I am Working!";
});

app.controller('newsController', ['$scope', '$http', function($scope, $http){
	$http.get('api/news.json').success(function(data){
		$scope.news = data;
	});

	$('#news:first-child').removeClass('invisible');

	$scope.animateElementIn = function($el){
		$el.removeClass('invisible');
		$el.addClass('animated fadeIn'); //uses animate.css
	};

	$scope.animateElementOut = function ($el) {
		$el.removeClass('fadeInUp');
		$el.addClass('animated fadeIn');
	};
}]);

app.controller('projectsController', ['$scope', '$http', function($scope, $http){
	$http.get('api/projects.json').success(function(data){
		$scope.projects = data;
	});
}]);

app.controller('teamController', function($scope){
	$scope.hello = "Hello I am Working!";
});
// Create the home page controller
// .controller('homeController', function ($scope) {
// 	$scope.message = "Home Page Test Message";
// });