/**
 * @class Angular
 * @type {module}
 * @name _template
 * @description A template modules for user when creating a new page for you application
 * @route /_template
 * @requires $routeProvider
 * @templateUrl app/html/_template.html
 * @controller _templateController
 * @resolve asyncData Async data from a online source
 */

angular.module('_template', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/_template', {
			templateUrl : 'app/html/_template.html',
			controller  : '_templateController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('_templateController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Template';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);