angular.module("app2",[])
.factory('factory3',function(){
	return {
		c:function(){
			alert('我是factory3的方法');
		}
	};
});
angular.module("myApp",['app2'])
.factory('myFactory',function(){
	return factory = {
		a:function(){
			alert('我是factory1的方法');
		}
	};
})
.factory('factory2', function(){
	return {
		b:function(){
			alert('我是factory2的方法');
		}
	};
})
.controller('myCtrl', ['$scope','myFactory','factory2','factory3', function($scope,myFactory,fac2,fac3){
	$scope.btn1 = myFactory.a;
	$scope.btn2 = fac2.b;
	$scope.btn3 = fac3.c;
}])