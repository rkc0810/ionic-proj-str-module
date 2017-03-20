'use strict';
userMgmt.controller('UserMgmtCtrl',function($scope,$rootScope,$state){
	$scope.home=function(){
		$state.go('home');
	}
});
