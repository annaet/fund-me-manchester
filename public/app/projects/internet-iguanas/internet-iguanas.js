'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:InternetIguanasCtrl
 * @description
 * # InternetIguanasCtrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('InternetIguanasCtrl', function ($scope) {
  })

  .controller('InternetIguanasAboutCtrl', function ($scope) {
  })

  .controller('InternetIguanasRaisedCtrl', function ($scope) {
  })

  .controller('InternetIguanasDonateCtrl', function ($scope, send) {
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
