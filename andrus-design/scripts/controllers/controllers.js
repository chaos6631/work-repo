'use strict';
var appControllers = angular.module('appControllers', ['ngRoute']);

/************************
	Controllers
***************************/

appControllers.controller('HomeCtrl', function($scope, $route, $routeParams, $location){
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.control = "HomeCtrl";
})

.controller('AboutCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
})

.controller('ContactCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
})

.controller('NewsCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('api/news.json').success(function(data){
		$scope.news = data;
	});
	
	$scope.animateElementIn = function($el){
		$el.removeClass('invisible');
		$el.addClass('animated fadeIn'); //uses animate.css
	};

	$scope.animateElementOut = function ($el) {
		$el.removeClass('fadeInUp');
		$el.addClass('animated fadeIn');
	};
}])

.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('api/projects.json').success(function(data){
		$scope.projects = data;
		$scope.control = "ProjectsCtrl";
	});
}])

.controller('ProjectDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.control = "ProjectDetailCtrl";
	$scope.project = $scope.projects[$routeParams.projectId]; // not working correctly
	$scope.params = $routeParams;
}])

.controller('TeamCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
});