'use strict';

cvApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('summary', {
    url: '/',
    templateUrl: './summary.html'
  })
  .state('skills', {
    url: '/skills',
    templateUrl: './skills.html'
  })
  .state('works', {
    url: '/works',
    templateUrl: './works.html'
  })
  .state('education', {
    url: '/education',
    templateUrl: './education.html'
  });
  
});
