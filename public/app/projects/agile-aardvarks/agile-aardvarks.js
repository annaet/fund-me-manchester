'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:AgileAardvarksCtrl
 * @description
 * # AgileAardvarksCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('AgileAardvarksCtrl', function ($scope) {
  })

  .controller('AgileAardvarksAboutCtrl', function ($scope) {
  })

  .controller('AgileAardvarksRaisedCtrl', function ($scope) {
  })

  .controller('AgileAardvarksDonateCtrl', function ($scope, send) {
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
