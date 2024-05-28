// Makes the first character of a given string uppercase
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Makes all characters uppercase
function allCaps(str) {
	return str.toUpperCase();
}

// Makes the first character of each word uppercase
function capitalizeWords(str) {
	return str.split(' ').map(capitalize).join(' ');
}

// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
// If more than one space appears in the middle of a string it is replaced by a single space.
function removeExtraSpaces(str) {
	return str.trim().replace(/\s+/g, ' ');
}

// Removes extra spaces and replaces spaces with the hyphen "-" and makes all characters lowercase
function kebobCase(str) {
	return str.trim().replace(/\s+/g, '-').toLowerCase();
}

// Removes extra spaces and replaces spaces with an underscore "_" and makes all characters lowercase
function snakeCase(str) {
	return str.trim().replace(/\s+/g, '_').toLowerCase();
}

// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
	let words = str.trim().split(' ');
	let result = words[0].toLowerCase();
	for (let i = 1; i < words.length; i++) {
		result += capitalize(words[i]);
	}
	return result;
}

// Take the first character of a string and move it to the end of a string
function shift(str) {
	return str.slice(1) + str.charAt(0);
}

// Converts the string to an array of words beginning with a hashtag
// Only return the three longest words
function makeHashTag(str) {
	return str
    .toLowerCase()
		.split(' ')
		.sort((a, b) => b.length - a.length)
		.slice(0, 3)
		.map((word) => '#' + word)
}

// Returns true if the given string is empty or contains only whitespace.
function isEmpty(str) {
  return str.trim() === '';
}


module.exports = {
	capitalize,
	allCaps,
	capitalizeWords,
	removeExtraSpaces,
	kebobCase,
	snakeCase,
	camelCase,
	shift,
	makeHashTag,
	isEmpty
};