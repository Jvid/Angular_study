angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	 $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
}])
.directive('myCustomer',function(){
	return {
		restrict:'ECMA',
		templateUrl:'tmp.html'
	}
})