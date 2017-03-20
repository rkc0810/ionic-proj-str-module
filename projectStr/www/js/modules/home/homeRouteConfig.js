/**
 * @file  List of config properties of the app
 * @copyright
 * @author
 */
var homeMgmt = angular.module('homeMgmt',[]);
homeMgmt.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    cache: false,
    templateUrl: 'js/modules/home/views/home.html',
    controller: 'HomeCtrl'
  })
})

