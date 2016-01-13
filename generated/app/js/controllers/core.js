/**
 * @class Angular
 * @type {module}
 * @name core
 * @description The core of the application, does not have a page, is the parent scope of a page scope
 * @controller coreController
 */

angular.module('core', [])
.controller('coreController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.appName = 'ADOC';
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	window.__adoc_classes = [];
	window.__adoc_types = [];
	window.__adoc_routes = [];
	var linking = [];
	for(var obj in window.__adoc_objects) {
		obj = window.__adoc_objects[obj];
		var type = null,
			desc = {},
			funcMode = false;
		for(var prop in obj) {
			var propName = prop.split('_')[0].toLowerCase();
			//console.log(prop.split('_')[0]+' : '+obj[prop])
			switch(propName) {
				case 'class':
					var c = obj[prop].trim();
					window.__adoc_classes.pushu(c);
					desc.class = c;
					break;
				case 'type':
					var t = obj[prop].match(/{?\s*(\w+)\s*}?/).pop().capitalize();
					window.__adoc_types.pushu(t);
					desc.type = t
					break;
				case 'route':
					var r = obj[prop].trim();
					window.__adoc_routes.pushu(r);
					desc.route = r
					break;
				case 'field':
				case 'param':
					var p = obj[prop].trim().match(/{(.*)}\s(\w+)\s(.*)/);
					desc[propName] = desc[propName] || [];
					desc[propName].push({
						type:p[1],
						name:p[2],
						description:p[3]
					})
					break;
				case 'return':
					var r = obj[prop].trim().match(/{(.*)}\s?(.*)?/);
					desc.return = {
						type: r[1],
						description: r[2]
					}
					break;
				case 'requires':
					break;
				case 'resolve':
					break;
				case 'restrict':
					break;
				case 'function':
					var f = obj[prop].trim();
					desc.function = desc.function || [];
					if(!__adoc_Function[f]) {
						desc.function.push({
							link : true,
							obj : __adoc_Function,
							id : f
						});
						linking.pushu(desc.function);
					} else {
						desc.function.push(__adoc_Function[f]);
					}
					break;
				default:
					var x = obj[prop].trim();
					desc[propName] = x;
					break;
			}
		}
		// desc ? console.log(desc) : undefined;
		var o = '__adoc_'+desc.type;
		window[o] = window[o] || [];
		if(desc.id)
			window[o][desc.id] = desc;
		if(desc.class)
			window[o].push(desc);
	}
	for(var i in linking) {
		for(var j in linking[i]) {
			if(isNaN(j)) continue;
			var l = linking[i][j];
			if(!l.link) continue;
			linking[i][j] = l.obj[l.id];
		}
	}
	/* -- Events ------------------------------------------- */
	$rootScope.$on('$routeChangeStart', function (args) {
		// console.log('Navigating to another page', args);
	});
	$rootScope.$on('$routeChangeSuccess', function (args) {
		$scope.path = $location.path().split('/')[1];
		$scope.breadCrumb = [{name:'Home',url:'#'}];
		var pathFragments = $location.path().match(/(\w+)/g),
			paths = '#/';
		for(var i in pathFragments) {
			paths += pathFragments[i] + '/';
			// $scope.breadCrumb.push({name:pathFragments[i].capitalize(),url:paths});
		}
	});
	$rootScope.$on("$routeChangeError", function (args) {
		console.error("Failed to load this page", args);
	});
}]);