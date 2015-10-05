var phonecatControllers = angular.module('phonecatControllers',[]);
phonecatControllers.controller('phonelistCtrl',['$scope','Phone',function($scope,Phone){
	// 这里的phoneId用的是action里面定义的params定义的phoneId
	$scope.phones = Phone.action();
	$scope.orderProp = 'age';
}]);
phonecatControllers.controller('phonedetailCtrl',['$scope','$routeParams','Phone',function($scope,$routeParams,Phone){
	// 这里是拿路由里的phoneId去给phoneId赋值，再用这个phoneId通过Phone去访问phones下的json文件
	// 路由里的phoneId又是通过phones.json里面的id给的值，这个值是由phonelist.html里的a标签触发的
	$scope.phone = Phone.get({
		phoneId:$routeParams.phoneId
	},function(phone){
		 $scope.mainImage = phone.images[0];
	});

	 $scope.setImg = function(img){
		 	$scope.mainImage = img;
		 	console.log(img);
		 };
}]);