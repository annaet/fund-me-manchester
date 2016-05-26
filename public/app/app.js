var app = angular.module('fundMe', [
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
      enabled: true
  });

  $urlRouterProvider
      .otherwise('');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('help', {
      url: '/help',
      templateUrl: 'app/help/help.html',
      controller: 'HelpCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    })
    .state('project1', {
      url: '/project1',
      views: {
        '': {
          templateUrl: 'app/projects/project1/project1.html',
          controller: 'Project1Ctrl'
        },
        'about@project1': {
          templateUrl: 'app/projects/project1/project1.about.html',
          controller: 'Project1AboutCtrl'
         },
        'raised@project1': {
          templateUrl: 'app/projects/project1/project1.raised.html',
          controller: 'Project1RaisedCtrl'
        },
        'donate@project1': {
          templateUrl: 'app/projects/project1/project1.donate.html',
          controller: 'Project1DonateCtrl'
        }
      }
    });
});
