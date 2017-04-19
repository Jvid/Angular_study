angular.module("myApp",[])
.directive('entering',function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			scope.$apply(attrs.entering)
		})
	}
})
.directive('leaving',function(){
	return function(scope,element,attrs){
		element.bind("mouseleave",function(){
			scope.$apply(attrs.leaving)
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.enterfn = function(){
		console.log("I am comming")
	}
	self.leavefn = function(){
		console.log("I have leaved")
	}
}])