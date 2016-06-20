'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:CloudCamelsCtrl
 * @description
 * # CloudCamelsCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('CloudCamelsCtrl', function ($scope) {
  })

  .controller('CloudCamelsAboutCtrl', function ($scope) {
  })

  .controller('CloudCamelsRaisedCtrl', function ($scope) {
  })

  .controller('CloudCamelsDonateCtrl', function ($scope, send) {
    $scope.sendBronze = function() {
      send.bronze();
    };
    $scope.sendSilver = function() {
      send.silver();
    };
    $scope.sendGold = function() {
      send.gold();
    };
  });
