'use strict';

/**
 * @ngdoc directive
 * @name fundmeApp.directive:fmHeader
 * @description
 * # fmHeader
 */
angular.module('fundMe')
  .directive('fmHeader', function () {
    return {
      templateUrl: 'app/fm-header/fm-header.html',
      restrict: 'E'
      // link: function postLink(scope, element, attrs) {
      // }
    };
  });
