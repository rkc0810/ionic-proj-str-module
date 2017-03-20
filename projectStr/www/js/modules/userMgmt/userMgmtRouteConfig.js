/**
 * @file  List of config properties of the app
 * @copyright
 * @author
 */
var userMgmt = angular.module('userMgmt',[]);
userMgmt.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'js/modules/userMgmt/views/login.html',
    controller: 'UserMgmtCtrl'
  })

  $urlRouterProvider.otherwise('/login');
})

