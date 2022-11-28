const utils = require('./utils');

stringArray = ["Hello", "World", "I", "am", "a", "string", "array"];
console.log(utils.convert_to_lower(stringArray));
console.log(utils.convert_to_upper(stringArray));
console.log(utils.get_index_of(stringArray, "a"));