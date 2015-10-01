'use strict'

define(['app'],function(app){
	app.factory('storeService',['$http','$rootScope','$q',function(http,rootScope,$q){
		
		var STORAGE_ID = 'todos';
		var storeService = {
			todos:[],

			_getFromLocalStorage: function(){
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			_saveToLocalStorage : function(todos){
				localStorage.setItem(STORAGE_ID,JSON.stringify(todos));
			},

			delete:function(todo){
				var deferred = $q.defer();
				storeService.todos.splice(storeService.todos.indexOf(todo),1);
				storeService._saveToLocalStorage(storeService.todos);
				deferred.resolve(storeService.todos);
				return deferred.promise;
			},
			get:function(){
				var deferred = $q.defer();
				angular.copy(storeService._getFromLocalStorage(),storeService.todos);
				deferred.resolve(storeService.todos);
				return deferred.promise;
			},
			insert:function(todo){
				var deferred = $q.defer();
				storeService.todos.push(todo);
				storeService._saveToLocalStorage(storeService.todos);
				deferred.resolve(storeService.todos);
				return deferred.promise;
			},
			put:function(todo,index){
				var deferred = $q.defer();
				storeService.todos[index] = todo;
				storeService._saveToLocalStorage(storeService.todos);
				deferred.resolve(storeService.todos);
				return deferred.promise;
			}

		};
		return storeService;

	}]);
});