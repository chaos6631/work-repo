'use strict';
var appServices = angular.module('appServices', ['ngRoute']);

/************************
	Services
***************************/
appServices.factory('projectService', function($http){
	$http.get('api/projects.json').success(function(data){
		var projects = data;

		var getProjects = function(){
			return projects;
		};

		var getProject = function($index){
			return projects[$index];
		};

		return {
			getProjects: getProjects,
			getProject: getProject
		};
		
	});

});