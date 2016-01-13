/**
 * @class Array
 * @type {Function}
 * @name forEach
 * @description Calls the Function passed by parameter to every element of the array
 * @param {Function} fn Function to be called for each element on the array
 * @return {Array} The array as per modified in the function passed as parameter
 */

if(!Array.prototype.forEach)
Array.prototype.forEach = function (fn) {
	for(var i in this) {
		if(isNaN(i)) continue;
		fn(this[i], +i, this);
	}
	return this;
};

/**
 * @class Array
 * @type {Function}
 * @name pushu
 * @description Pushes value to array but only if it's not already in the array
 * @param {Unknown} value The value to be pushed
 * @return {Array} The array with unique elements
 */

Array.prototype.pushu = function (value) {
	if(this.indexOf(value) == -1) {
		this.push(value);
	}
	return this;
}

/**
 * @class String
 * @type {Function}
 * @name capitalize
 * @description Capitalizes first word in a string or every word in it
 * @param {Boolean} capitalize_all_letters Wheter or not to capitalize all the words in the string
 * @return {String} The string with capitalized words
 */

String.prototype.capitalize = function (capitalize_all_letters) {
	if(capitalize_all_letters)
		return this.split(' ').forEach(function(v,i,a){a[i] = v.capitalize()}).join(' ');
	return this.charAt(0).toUpperCase() + this.slice(1);
};