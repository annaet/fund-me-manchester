'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:HardwareHipposCtrl
 * @description
 * # HardwareHipposCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('HardwareHipposCtrl', function ($scope) {
  })

  .controller('HardwareHipposAboutCtrl', function ($scope) {
  })

  .controller('HardwareHipposRaisedCtrl', function ($scope) {
  })

  .controller('HardwareHipposDonateCtrl', function ($scope, send) {
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
