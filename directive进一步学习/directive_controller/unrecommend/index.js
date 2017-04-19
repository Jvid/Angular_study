angular.module("myApp",[])
.directive('clickButton',function(){
	return function(scope,element){
		console.log(scope);
		element.bind('click',function(){
			scope.talk.alertFn();
		})
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.alertFn = function(){
		alert('我是控制器中的弹窗方法')
	}
}])