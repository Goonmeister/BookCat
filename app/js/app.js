'use strict'

/* App module: Used for loading the module and routing */

var bookcatApp = angular.module("bookcatApp", [
	'ngRoute',
    'bookcatAnimations',
	'bookcatControllers',
	'bookcatServices'
]);

bookcatApp.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
			when('/books', {
				templateUrl: 'partials/book-list.html',
				controller: 'BookListCtrl'
			}).
			when('/books/:bookId', {
				templateUrl: 'partials/book-detail.html',
				controller: 'BookDetailCtrl'
			}).
			otherwise({
				redirectTo: '/books'
			});
	}]);