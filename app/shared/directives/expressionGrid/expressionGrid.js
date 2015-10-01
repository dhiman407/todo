'use strict';

define(['app'], function (app) {

    var injectParams = ['$filter', 'uiGridConstants'];

    var expressionGrid = function ($filter, uiGridConstants) {
        var controller = function($scope,$element){
            debugger;
          $scope.blur = false;
          $scope.myData = [];
          $scope.focus = true;  
            $scope.showMaskingOptions = function(item){
                debugger;
                alert("inController");
             };                                 
        $scope.gridOptions = { 
                    data: 'myData',
                    enableRowSelection: true, 
                    enableRowHeaderSelection: true,
                    enableCellEditOnFocus: true,
                    multiSelect:true,
                    selectionRowHeaderWidth: 35,
                    rowHeight: 35,
                    showGridFooter:true,
                    columnDefs:[{
                        field:'name',
                        width:'20%',
                        enableCellEdit:false,
                        displayName:'Full Name'
                    },{
                        field:'time',
                        width:'20%',
                        enableCellEdit:false,
                        displayName:'Time'
                    },{
                        field:'date',
                        width:'20%',
                        enableCellEdit:false,
                        displayName:'Date'
                    },{  
                        field:'frequency',
                        displayName:'Frequency',
                        width:'10%',
                        enableCellEdit:false,
                    }
                    ]
                  };

         $scope.gridOptions.onRegisterApi = function(gridApi){
          //set gridApi on scope
          console.log('test');
              $scope.gridApi = gridApi;
            };         
        };

        var link = function($scope, $element, $attrs){
            $scope.gridOptions.data = $scope.griddata;
        };

        return {
            restrict: 'EA',
            controller:controller,
            link:link,
            scope:{
              griddata:'='
            },
            controllerAs:'ExpressionGridController',
            templateUrl:'app/shared/directives/expressionGrid/expressionGrid.html'
        };
    };

    expressionGrid.$inject = injectParams;

    app.directive('expressionGrid', expressionGrid);

});