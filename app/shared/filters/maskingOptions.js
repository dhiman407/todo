'use strict';

define(['app'], function (app) {

    var maskingOptionsFilter = function () {

          var maskingOptionsHash = {
            0: 'Static',
            1: 'Character',
            13:'FPM',
            7: 'Intellimask',
            3:'Random'
          };

          return function(input) {
            var returnValue = maskingOptionsHash[input];
            if (returnValue){
              return returnValue;
            } else {
              return '';
            }
          };
    };

    app.filter('maskingOptions', maskingOptionsFilter);

});