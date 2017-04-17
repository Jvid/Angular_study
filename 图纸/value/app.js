angular.module("myApp",[])
.value('domain', 'current message')
.value('imgDomain','http://www.tigerz.nz')
.controller('myCtrl', ['$scope','domain','imgDomain',function($scope,domain,imgDomain){
	$scope.a = domain;
	$scope.b = domain;
	$scope.c = imgDomain;
}])