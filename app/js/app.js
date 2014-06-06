'use strict'

/* App module: Used for loading the module and routing */

var bookcatApp = angular.module("bookcatApp", [
	'ngRoute',
	'bookcatControllers',
	'bookcatServices'
]);

bookcatApp.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
			when('/books', {
				templateUrl: 'partials/list.html',
				controller: 'BookListCtrl'
			}).
			otherwise({
				redirectTo: '/books'
			});
	}]);