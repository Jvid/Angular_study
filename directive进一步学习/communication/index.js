angular.module("myApp",[])
.directive('welcome',function(){
	return {
		restrict:'E',
		template:'<div><p>我是指令创建出来的，我有一个点击方法</p><p>{{test}}</p></div>',
		//默认自己重新定义了一个scope，如果没有的话  则遵循继承
		scope:{}, 
		controller:'dirCtrl',
		link:function(scope,element){
			element.bind('click',function(){
				console.log(scope.words);
			})
		}
	}
})
.directive('hello',function(){
	return {
		require:'welcome',
		link:function(scope,element,attrs,welcomeCtrl){
			welcomeCtrl.sayHello();
		}
	}
})
.directive('hi',function(){
	return {
		require:'welcome',
		link:function(scope,element,attrs,welcomeCtrl){
			welcomeCtrl.sayHi();
		}
	}
})
.controller('myCtrl', ['$scope', function($scope){
	$scope.test = "jvid"
}])
.controller('dirCtrl', ['$scope', function($scope){
	$scope.words = [];
	$scope.test = "jingduo"
	var self = this;
	this.sayHello = function(){
		$scope.words.push('Hello')
	};
	this.sayHi = function(){
		$scope.words.push('Hi')
	}
}])