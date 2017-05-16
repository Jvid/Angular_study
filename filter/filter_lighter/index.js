angular.module('myApp',['ngSanitize'])
.filter('highlight', function () {
		return function (text, search, caseSensitive) {
			if (!angular.isString(text)) {
				return text;
			}
			if (search || angular.isNumber(search)) {
				text = text.toString();
				search = search.toString();
				if (caseSensitive) {
					return text.split(search).join('<span class="ui-match">' + search + '</span>');
				} else {
					return text.replace(new RegExp(search, 'gi'), '<span class="ui-match">$&</span>');
				}
			} else {
				return text;
			}
		};
	})
.controller('myCtrl', ['$scope', function($scope){
	$scope.items = ['jvid','jing','duo','zhang','meng','pang','hao','jie','huang','run','qiang','sun','yi','bo','yang','jian','du','yi','bo','li','qiang','jian','jun']
}])