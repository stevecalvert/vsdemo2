'use strict';

/**
 * @ngdoc service
 * @name vsdemo2App.myService2
 * @description
 * # myService2
 * Factory in the vsdemo2App.
 */
angular.module('vsdemo2App')
  .factory('myService2', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
