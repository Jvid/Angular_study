angular.module("myApp",[])
.directive('contenteditable',function(){
	return　{
		require:'ngModel',
		link:function(scope,ele,attrs,ctrl){
			//视图 --> 模型
			ele.on('keyup',function(){
				scope.$apply(function(){
					ctrl.$setViewValue(ele.html());
				})
			})

			//模型 --> 视图
			ctrl.$render = function(){
				ele.html(ctrl.$viewVaule);
			}

			//从DOM中初始化数据
			ctrl.$setViewValue(ele.html());
		}
	}
})