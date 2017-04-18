angular.module("myApp",[])
.directive('entering',function(){
	return function(scope,element){
		element.bind('mouseenter',function(){
			console.log('mouse has entered this div');
		})
	}
})
.directive('leaving',function(){
	return function(scope,element){
		element.bind('mouseleave',function(){
			console.log('mouse has left this div');
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	
}])