angular.module("myApp",[])
.filter('capitalSearch',function(){
	return function(items,w){
		var tempArr = [];
		var reg = new RegExp(w,i);
		for(var i = 0,len = items.length; i < len; i++ ){
			var item = items[i];
			//检测首字母是不是搜索的词
			if(reg.test(item.substring(0,1))){
				tempArr.push(item)
			}
		}
		return tempArr;
	}
})
.controller('myCtrl', ['$scope', function($scope){
	var self = this;
	self.sc = '';
	self.items = ['jvid','jing','duo','zhang','meng','pang','hao','jie','huang','run','qiang','sun','yi','bo','yang','jian','du','yi','bo','li','qiang','jian','jun']
}])