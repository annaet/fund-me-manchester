'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:DataDucksCtrl
 * @description
 * # DataDucksCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('DataDucksCtrl', function ($scope) {
  })

  .controller('DataDucksAboutCtrl', function ($scope) {
  })

  .controller('DataDucksRaisedCtrl', function ($scope) {
  })

  .controller('DataDucksDonateCtrl', function ($scope, send) {
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
