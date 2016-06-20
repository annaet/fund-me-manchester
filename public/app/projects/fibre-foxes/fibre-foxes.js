'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:FibreFoxesCtrl
 * @description
 * # FibreFoxesCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('FibreFoxesCtrl', function ($scope) {
  })

  .controller('FibreFoxesAboutCtrl', function ($scope) {
  })

  .controller('FibreFoxesRaisedCtrl', function ($scope) {
  })

  .controller('FibreFoxesDonateCtrl', function ($scope, send) {
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
