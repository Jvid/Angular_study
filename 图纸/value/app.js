angular.module("myApp",[])
.value('domain', 'current message')
.controller('myCtrl', ['$scope','domain', function($scope,domain){
	$scope.a = domain;
	$scope.b = domain;
}])