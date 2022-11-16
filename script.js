// # Hashing
// #1 - something to hash - arbitary data structure (signature, checking equality between objects, passwords, validation)
// #2 - do something to change it - deterministically process data (always get the same output given the same input)
// #3 - display/return the hash - get the same integer out, i.e. data in === data out


// require only needed for ourHashingFunctionUsingCryptoLibrary solution
// import library from node (implementation specific)
const {
    createHash
} = require('node:crypto');


function ourHashingFunctionUsingCryptoLibrary () {

    const hash = createHash('sha256'); // (implementation specific)

    // #1 - something to hash
    const startingVal = "abc";

    // #2 - do something to change it
    hash.update(startingVal);
    const result = hash.digest('hex');

    // #3 - display/return the hash
    console.log(result);

    return result;

}

function ourHashingFunctionUsingCaesarCypher () {

    // our cypher (implementation specific)
    const caesar = {
        'a': 'b',
        'b': 'c',
        'c': 'd'
    }

    // #1 - something to hash
    const startingVal = "abc";


    // #2 - do something to change it
    let hashValue = [];

    for (let char of startingVal) {
        hashValue.push(caesar[char]);
    }

    const result = hashValue.join('');


    // #3 - display/return the hash
    console.log(result);

    return result;
};

function ourHashingFunctionUsingCharCodes (startingVal) {

    // #1 - something to hash
    // passed in as parameter


    // #2 - do something to change it
    let hashValue = [];

    for (let i = 0; i < startingVal.length; i++) {
        const codedChar = startingVal.charCodeAt(i);
        hashValue.push(codedChar);
    }

    const result = hashValue.join('');

    
    // #3 - display/return the hash
    console.log(result);

    return result;
};


ourHashingFunctionUsingCryptoLibrary();
ourHashingFunctionUsingCaesarCypher();
ourHashingFunctionUsingCharCodes('abc');