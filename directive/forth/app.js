
angular.module("myApp",[])
.controller('myCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	$rootScope.customer = {
		name: 'jingduo',
     	address: 'beijing'
	}
	 $scope.customer1 = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
    // $scope.$broadcast('data','$scope.customer');
    $scope.broad = function(){
    	// console.log('a')
    	$scope.$broadcast('data',$scope.customer1);
    }
    $scope.$on('emitData',function(d,data){
    	$scope.$broadcast('emitData1',data)
    })
}])
.controller('firstCtrl', ['$scope', function($scope){
	$scope.$on('data',function(d,data){
		$scope.customer = data;
		// console.log(arguments)
		// console.log(data)
	})
	$scope.$on('emitData1',function(d,data){
		$scope.emitData = data;
	})
}])
.controller('secondCtrl', ['$scope', function($scope){
	$scope.temp = true;
	$scope.customer = {
		name:'jvid',
		address:'changping'
	}
	$scope.$on('data',function(d,data){
		$scope.customer = data;
	});
	$scope.emitfn = function(){
		$scope.temp ? $scope.$emit('emitData','I am the emit data') : $scope.$emit('emitData','');
		$scope.temp = !$scope.temp;
	}
	
}])
.directive('myCustomer',function(){
	return {
		restrict:'ECMA',
		templateUrl:'tmp.html'
	}
})