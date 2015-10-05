var phonecatFilter = angular.module('phonecatFilter',[]);
phonecatFilter.filter('checkmark',function(){
	return function(input){
		return input? '\u2713' : '\u2718';
		};
	});