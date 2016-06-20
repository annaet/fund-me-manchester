'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:OpticalOctopusesCtrl
 * @description
 * # OpticalOctopusesCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('OpticalOctopusesCtrl', function ($scope) {
  })

  .controller('OpticalOctopusesAboutCtrl', function ($scope) {
  })

  .controller('OpticalOctopusesRaisedCtrl', function ($scope) {
  })

  .controller('OpticalOctopusesDonateCtrl', function ($scope, send) {
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
