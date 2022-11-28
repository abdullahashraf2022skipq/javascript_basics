const stringManipulation = {
    convert_to_lower: (stringArray) => {
        // return stringArray.map((str) => str.toLowerCase());
        let resultArray = [];
        for (const x of stringArray) {
            resultArray.push(x.toLowerCase());
        }
        return resultArray;
    },
    convert_to_upper: (stringArray) => {
        // return stringArray.map((str) => str.toUpperCase());
        let resultArray = [];
        for (const x of stringArray) {
            resultArray.push(x.toUpperCase());
        }
        return resultArray;
    },
    get_index_of: (stringArray, str) => {
        return stringArray.indexOf(str);
    }
}

// export default stringManipulation;
module.exports = stringManipulation;