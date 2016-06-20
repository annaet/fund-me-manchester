'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:NetworkNewtsCtrl
 * @description
 * # NetworkNewtsCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('NetworkNewtsCtrl', function ($scope) {
  })

  .controller('NetworkNewtsAboutCtrl', function ($scope) {
  })

  .controller('NetworkNewtsRaisedCtrl', function ($scope) {
  })

  .controller('NetworkNewtsDonateCtrl', function ($scope, send) {
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
