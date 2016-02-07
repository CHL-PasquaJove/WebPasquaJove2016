'use strict';

var pasquaJoveApp;

pasquaJoveApp = angular
	.module('pasquaJove', [
		'ngRoute',
		'pascalprecht.translate'
	]);

pasquaJoveApp.config(configFunction);

configFunction.$inject = ['$routeProvider', '$translateProvider'];

function configFunction($routeProvider, $translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: './i18n/language_',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');

	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController',
			controllerAs: 'vm'
		})
		.when('/responsables', {
			templateUrl:'partials/responsables.html',
			controller: '',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo:'/'
		})
}