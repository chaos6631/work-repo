var appControllers = angular.module('appControllers', []);

/************************
	Controllers
***************************/

appControllers.controller('HomeCtrl', function($scope, $http){
	
});

appControllers.controller('AboutCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
});

appControllers.controller('ContactCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
});

appControllers.controller('NewsCtrl', ['$scope', '$http', function($scope, $http){
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

appControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('api/projects.json').success(function(data){
		$scope.projects = data;
	});
}]);

appControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.projectId = $routeParams.projectId; // not working correctly
}]);

appControllers.controller('TeamCtrl', function($scope){
	$scope.hello = "Hello I am Working!";
});