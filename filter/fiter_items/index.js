angular.module("myApp",[])
.filter('itemsFilter',function(){
	return function (items) {
		var tempArr = [];
		for(var i = 0,len = items.length; i < len; i++ ){
			if(items[i]%2 == 0){
				tempArr.push(items[i])
			}
		}
		return tempArr;
	}
})
.filter('itemsFilter2',function(){
	return function (items) {
    return items.filter(function (item) {
      return item % 2 != 0;
    });
  };
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.nums = [2,34,5345,43,6543,2,3,3,33,12,5,6,7,5,43,23]
	self.nums2 = [2,34,5345,43,6543,2,3,3,33,12,5,6,7,5,43,23]
}])