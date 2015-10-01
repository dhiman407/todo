'use strict';

define(['app'],function(app){

	app.register.controller('homeController',['$scope','homeService','storeService',function($scope,homeService,storeService){
		debugger;
		$scope.todoList = [];
		$scope.item = {
			"name":'',
			"time":'',
			"date":'',
			"frequency":''
		}
		storeService.get().then(function(list){
			$scope.todoList = list;
		})
		$scope.saveTodoTask = function(item){
			storeService.insert(item);
			$scope.item = {};
		}
	}]);
});