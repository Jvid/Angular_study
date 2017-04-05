angular.module("myApp",[])
.controller('myCtrl', ['$scope', function($scope){
	 $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
}])
.directive('myCustomer',function(){
	return {
		template: '姓名:{{customer.name}}  地址:{{customer.address}} '
	}
})