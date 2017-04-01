var app = angular.module("myApp",['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('');
	$routeProvider
	.when('home',{templateUrl:'tpls/home.html',controller:'homeCtrl'})
	.when('list',{templateUrl:'tpls/list.html',controller:'listCtrl'})
}])