'use strict';

// Declare app level module which depends on views, and components
define(['routeResolver'],function(routeResolver){

var app = angular.module('dgSecureApp', [
  'ui.router',
  'ui.grid',
  'ui.grid.edit',
  'ui.grid.selection',
  'ngRoute',
  'ngAnimate',
  'routeResolverServices',
  'ui.bootstrap',
  'ngDialog'
]);

app.config(['$routeProvider','$stateProvider','routeResolverProvider','$controllerProvider','$compileProvider','$filterProvider','$provide','$httpProvider',
	function($routeProvider,$stateProvider,routeResolverProvider,$controllerProvider,$compileProvider,$filterProvider, $provide,$httpProvider) {
	app.register = {
		controller:$controllerProvider.register,
		directive:$compileProvider.directive,
		filter:$filterProvider.register,
		factory:$provide.factory,
		service:$provide.service
	};

	var route = routeResolverProvider.route;
	$stateProvider
	
	.state('home', route.resolve('home','home/'))
	.state('todoreminders', route.resolve('todoreminders','todoreminders/'))
	.state('birthdays',route.resolve('birthdays','birthdays/'))
	.state('settings',route.resolve('settings','settings/'));

	$routeProvider.otherwise({redirectTo: '/home'}); 
	
		

}]);
app.run(['$rootScope', '$location',function($rootScope,$location){
	$rootScope.localData = location.origin+"/todo/data/";
	$rootScope.dgControllerUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgcontroller/"; 
	$rootScope.dgUIUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgUI/"; 
	$rootScope.dgControlUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgControl/"; 
}]);
return app;
});