// Create the module and name it app
'use strict';
var app = angular.module('app', [
	'ngRoute', 
	'appControllers',
	'appAnimations', 
	'angular-inview',
	'angular-scroll-animate',	
]);


app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		// $routeProvider.otherwise("/");
		$routeProvider.				
			when('/', {					
				templateUrl: "templates/home.html",
				controller: "HomeCtrl"
			}).					
			when('/about', {
				templateUrl: "templates/about.html",
				controller: "AboutCtrl"
			}).				
			when('/contact', {					
				templateUrl: "templates/contact.html",
				controller: "ContactCtrl"
			}).
			when('/news', {					
				templateUrl: "templates/news.html",
				controller: "NewsCtrl"
			}).
			when('/projects', {					
				templateUrl: "templates/projects.html",
				controller: "ProjectsCtrl"
			}).
			when('/projects/:projectId', {
        templateUrl: 'templates/project-detail.html',
        controller: 'ProjectsCtrl'
      }).
			when('/team', {					
				templateUrl: "templates/team.html",
				controller: "TeamCtrl"
			}).
			otherwise('/', {					
				templateUrl: "templates/home.html",
				controller: "HomeCtrl"
			});

			// $locationProvider.html5Mode(true);
}]);

