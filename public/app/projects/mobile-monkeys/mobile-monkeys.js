'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:MobileMonkeysCtrl
 * @description
 * # MobileMonkeysCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('MobileMonkeysCtrl', function ($scope) {
  })

  .controller('MobileMonkeysAboutCtrl', function ($scope) {
  })

  .controller('MobileMonkeysRaisedCtrl', function ($scope) {
  })

  .controller('MobileMonkeysDonateCtrl', function ($scope, send) {
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
