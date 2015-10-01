'use strict';

define(['app'],function(app){

	app.controller('loginController',['$scope','$location','loginService',function($scope,$location,loginService){
	$scope.credentials = {
		username:'',
		password:''
	};
	$scope.login = function(credentials){
		var params = {
			json:{"UserName":credentials.username,"Password":credentials.password}
		};
		loginService.login(params).then(function(response){
			console.log(response);
			$location.path('/home');
		},function(){

		});
	}
}]);
});