angular.module("myApp",[])
.controller('myCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.a = {
		name:'jvid',
		address:'beijing'
	}
	$scope.b = {
		name:"jingduo",
		address:"chaoyang"
	}
}])
.directive('myCustomer',function(){
	return {
		restrict:'ECMA',
		scope:{
			c: '=info'
		},
		templateUrl:'tmp.html'
		
	}
})