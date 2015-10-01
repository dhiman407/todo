'use strict';

define(['app'],function(app){

	app.controller('appController',['$scope','$location',function($scope,$location){
		$scope.loginRouting = function(){
			if($location.path() != "/login"){
				return true;
			}else{
				return false;
			}
		};
	}]);
});