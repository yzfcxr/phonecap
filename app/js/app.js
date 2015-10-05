var phonecatApp = angular.module('phonecat',['ngRoute','phonecatControllers','phonecatService','phonecatAnimations','phonecatFilter']);
phonecatApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/phones',{
		templateUrl:'parts/phonelist.html',
		controller:'phonelistCtrl'
	}).when('/phones/:phoneId',{
		templateUrl:'parts/phonedetail.html',
		controller:'phonedetailCtrl'
	}).otherwise({redirectTo:'/phones'})
}]);