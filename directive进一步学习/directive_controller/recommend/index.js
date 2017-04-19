angular.module("myApp",[])
.directive('clickButton',function(){
	return function(scope,element){
		console.log(scope);
		element.bind('click',function(){
			// scope.$apply("talk.testNum = 888;talk.alertFn()")
			scope.$apply(function(){
				scope.talk.testNum = 888;
				scope.talk.alertFn()
			})
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.testNum = 3;
	self.alertFn = function(){
		alert('我是控制器中的弹窗方法')
	}
}])