angular.module("myApp",[])
.directive('entering',function(){
	return function(scope,element,attrs){
		element.bind('mouseenter',function(){
			element.addClass(attrs.entering)
		})
	}
})
.directive('leaving',function(){
	return function(scope,element,attrs){
		element.bind('mouseleave',function(){
			element.removeClass(attrs.entering)
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	
}])