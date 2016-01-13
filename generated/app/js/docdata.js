window.__adoc_types = ['module','function'];
window.__adoc_files = [];
window.__adoc_modules = [];
window.__adoc_objects = [];
window.__adoc_files.push('js_extension.js');
window.__adoc_files.push('main.js');
window.__adoc_modules.push({
	name : 'main',
	dependencies : ['ngRoute', 'ngSanitize', 'core', 'services', 'directives', 'home', 'tags', 'stuff']
});
window.__adoc_files.push('core.js');
window.__adoc_modules.push({
	name : 'core',
	dependencies : undefined
});
window.__adoc_files.push('home.js');
window.__adoc_modules.push({
	name : 'home',
	dependencies : undefined
});
window.__adoc_files.push('stuff.js');
window.__adoc_modules.push({
	name : 'stuff',
	dependencies : undefined
});
window.__adoc_files.push('tags.js');
window.__adoc_modules.push({
	name : 'tags',
	dependencies : undefined
});
window.__adoc_files.push('_template.js');
window.__adoc_modules.push({
	name : '_template',
	dependencies : undefined
});
window.__adoc_files.push('directives.js');
window.__adoc_modules.push({
	name : 'directives',
	dependencies : undefined
});
window.__adoc_files.push('javascriptObjectViewer.js');
window.__adoc_files.push('svgObject.js');
window.__adoc_files.push('restApi.js');
window.__adoc_modules.push({
	name : 'restApi',
	dependencies : undefined
});
window.__adoc_files.push('services.js');
window.__adoc_modules.push({
	name : 'services',
	dependencies : ['restApi']
});
window.__adoc_objects.push({
	class_0 : 'Array  ',
	type_1 : '{Function}  ',
	name_2 : 'forEach  ',
	description_3 : 'Calls the Function passed by parameter to every element of the array  ',
	param_4 : '{Function} fn Function to be called for each element on the array  ',
	return_5 : '{Array} The array as per modified in the function passed as parameter  ',
	file : 'js_extension.js'
});
window.__adoc_objects.push({
	class_0 : 'Array  ',
	type_1 : '{Function}  ',
	name_2 : 'pushu  ',
	description_3 : 'Pushes value to array but only if it\'s not already in the array  ',
	param_4 : '{Unknown} value The value to be pushed  ',
	return_5 : '{Array} The array with unique elements  ',
	file : 'js_extension.js'
});
window.__adoc_objects.push({
	class_0 : 'String  ',
	type_1 : '{Function}  ',
	name_2 : 'capitalize  ',
	description_3 : 'Capitalizes first word in a string or every word in it  ',
	param_4 : '{Boolean} capitalize_all_letters Wheter or not to capitalize all the words in the string  ',
	return_5 : '{String} The string with capitalized words  ',
	file : 'js_extension.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{module}  ',
	name_2 : 'core  ',
	description_3 : 'The core of the application, does not have a page, is the parent scope of a page scope  ',
	controller_4 : 'coreController  ',
	file : 'core.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{module}  ',
	name_2 : 'home  ',
	description_3 : 'The home controller  ',
	route_4 : '/  ',
	requires_5 : '$routeProvider  ',
	templateUrl_6 : 'app/html/home.html  ',
	controller_7 : 'homeController  ',
	resolve_8 : 'asyncData Data from a rest API (commented, fails to get)  ',
	file : 'home.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{module}  ',
	name_2 : 'stuff  ',
	description_3 : 'The stuff controller, example of a page  ',
	route_4 : '/stuff  ',
	requires_5 : '$routeProvider  ',
	templateUrl_6 : 'app/html/stuff.html  ',
	controller_7 : 'stuffController  ',
	resolve_8 : 'asyncData nothing  ',
	file : 'stuff.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{module}  ',
	name_2 : 'tags  ',
	description_3 : 'The tags controller, example of a page  ',
	route_4 : '/tags  ',
	requires_5 : '$routeProvider  ',
	templateUrl_6 : 'app/html/tags.html  ',
	controller_7 : 'stuffController  ',
	resolve_8 : 'asyncData nothing  ',
	file : 'tags.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{module}  ',
	name_2 : '_template  ',
	description_3 : 'A template modules for user when creating a new page for you application  ',
	route_4 : '/_template  ',
	requires_5 : '$routeProvider  ',
	templateUrl_6 : 'app/html/_template.html  ',
	controller_7 : '_templateController  ',
	resolve_8 : 'asyncData Async data from a online source  ',
	file : '_template.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{directive}  ',
	name_2 : 'jsov  ',
	description_3 : 'A directive that display a js object on html  ',
	requires_4 : '$compile  ',
	restrict_5 : '{E}  ',
	templateUrl_6 : 'app/js/directives/templates/jsov.html  ',
	param_7 : '{Object} obj The javascript object to be displayed  ',
	file : 'javascriptObjectViewer.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{directive}  ',
	name_2 : 'svgObject  ',
	description_3 : 'A directive that display a svg object given an url  ',
	restrict_4 : '{E}  ',
	templateUrl_5 : 'app/js/directives/templates/svgObject.html  ',
	param_6 : '{String} src Link to the .svg to be displayed  ',
	param_7 : '{String} color Predominant color to be applied to the svg  ',
	param_8 : '{String} id The id to be assigned to the svg holder  ',
	file : 'svgObject.js'
});
window.__adoc_objects.push({
	class_0 : 'Angular  ',
	type_1 : '{service}  ',
	name_2 : 'restApi  ',
	description_3 : 'A service to be configured and then called to get a json from a REST route  ',
	requires_4 : '$http, $q  ',
	function_5 : 'restApiConfig  ',
	function_6 : 'restApiGet  ',
	file : 'restApi.js'
});
window.__adoc_objects.push({
	type_0 : '{Function}  ',
	id_1 : 'restApiConfig  ',
	name_2 : 'config  ',
	description_3 : 'Configures the service  ',
	param_4 : '{restApiConfigOpts} opts Object containing fields  ',
	return_5 : '{Undefiend}  ',
	file : 'restApi.js'
});
window.__adoc_objects.push({
	type_0 : '{Function}  ',
	id_1 : 'restApiGet  ',
	name_2 : 'get  ',
	description_3 : 'Gets data according to what was done in the config function  ',
	param_4 : '{restApiGetParams} params Object containing the fields to be passed tp the route, can contain 0 or more  ',
	return_5 : '{Undefiend}  ',
	file : 'restApi.js'
});
window.__adoc_objects.push({
	type_0 : '{Object}  ',
	id_1 : 'restApiConfigOpts  ',
	field_2 : '{String} path Path to the REST API  ',
	file : 'restApi.js'
});
window.__adoc_objects.push({
	type_0 : '{Object}  ',
	id_1 : 'restApiGetParams  ',
	field_2 : '{Unknown} custom_field User-defined field  ',
	file : 'restApi.js'
});
