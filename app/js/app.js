'use strict';

var pasquaJoveApp;

pasquaJoveApp = angular
	.module('pasquaJove', [
		'ngRoute'
	]);

require('./maincontroller.controller.js');

pasquaJoveApp.config(configFunction);

configFunction.$inject = ['$routeProvider'];

function configFunction($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo:'/',
			controller: 'MainController',
			controllerAs: 'vm'
		})
}