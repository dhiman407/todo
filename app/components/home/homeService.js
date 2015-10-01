'use strict';

define(['app'],function(app){

app.factory('homeService',['$rootScope','$http',function($rootScope,$http){
	var homeService = {};

	homeService.getGridData = function(){
		var url = $rootScope.localData + 'todolist.json';
		return $http.get(url);;
	};
	return homeService;
}]);
});