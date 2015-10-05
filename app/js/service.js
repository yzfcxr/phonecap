var phonecatService = angular.module('phonecatService',['ngResource']);
phonecatService.factory('Phone',['$resource',function($resource){
	return $resource('phones/:phoneId.json',{},{
		action:{
			method:'GET',
			//这里的params是默认的不要粗心写成了param
			params:{
				phoneId:'phones'
			},
			isArray:true
		}
	});
}]);