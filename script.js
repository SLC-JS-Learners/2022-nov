// # Hashing
// arbitary data structure  (signature, checking equality between objects, passwords, validation)
// deterministically process data (always get the same output given the same input)
// get the same integer out, i.e. data in === data out

// import library from node (implementation specific)
// const {
//     createHash
//   } = require('node:crypto');

function ourHashingFunction (startingVal) {

    const caesar = {
        'a': 'b',
        'b': 'c',
        'c': 'd'
    }

    // const hash = createHash('sha256'); (implementation specific)

    // #1 - something to hash
    // const startingVal = "abc";

    // #2 - do something to change it

    // hash.update(startingVal); (implementation specific)

    let hashValue = [];
    // for (let char of startingVal) {
    //     hashValue.push(caesar[char]);
    // }

    for (let i = 0; i < startingVal.length; i++) {
        const codedChar = startingVal.charCodeAt(i);
        hashValue.push(codedChar);
    }

    const result = hashValue.join('');

    

    // prepare for display (implementation specific)
    // const result = hash.digest('hex');

    // #3 - display/return the hash
    console.log(result);

    return result;
};

ourHashingFunction('abc');