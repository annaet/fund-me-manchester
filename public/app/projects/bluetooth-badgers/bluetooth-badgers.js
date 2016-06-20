'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:BluetoothBadgersCtrl
 * @description
 * # BluetoothBadgersCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('BluetoothBadgersCtrl', function ($scope) {
  })

  .controller('BluetoothBadgersAboutCtrl', function ($scope) {
  })

  .controller('BluetoothBadgersRaisedCtrl', function ($scope) {
  })

  .controller('BluetoothBadgersDonateCtrl', function ($scope, send) {
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
