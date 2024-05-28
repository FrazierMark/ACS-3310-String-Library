const stringUtils = require('../src/index.js');

test('should return the string in uppercase', () => {
	expect(stringUtils.capitalize('hello')).toBe('Hello');
});

test('should return the string in all uppercase', () => {
	expect(stringUtils.allCaps('hello')).toBe('HELLO');
});

test('should return the string with the first character of each word capitalized', () => {
	expect(stringUtils.capitalizeWords('hello world')).toBe('Hello World');
});

test('should remove extra spaces from the beginning and end and reduce multiple spaces in the middle to a single space', () => {
	expect(stringUtils.removeExtraSpaces('  Hello   world  ')).toBe(
		'Hello world'
	);
});

test('should remove extra spaces and replace spaces with hyphens, and make all characters lowercase', () => {
	expect(stringUtils.kebobCase('  Hello   world  ')).toBe('hello-world');
});

test('should remove extra spaces and replace spaces with underscores, and make all characters lowercase', () => {
	expect(stringUtils.snakeCase('  Hello   world  ')).toBe('hello_world');
});

test('should lowercase the first character of the first word, uppercase the first character of all other words, and remove all spaces', () => {
	expect(stringUtils.camelCase('  hello   world  ')).toBe('helloWorld');
});

test('should take the first character of a string and move it to the end of the string', () => {
	expect(stringUtils.shift('hello')).toBe('elloh');
});

test('should convert the string to an array of the three longest words starting with hashtags', () => {
	expect(stringUtils.makeHashTag('Hello from the front seat of my car')).toEqual([
		'#hello',
		'#front',
		'#from',
	]);
});

test('should return true if the given string is empty or contains only whitespace', () => {
	expect(stringUtils.isEmpty('   ')).toBe(true);
	expect(stringUtils.isEmpty('')).toBe(true);
	expect(stringUtils.isEmpty('non-empty')).toBe(false);
});
