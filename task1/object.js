
let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

// the output will be :
//String One
//String One
//true

// this is because :obj[1] = 'One'; in this even though 1 is a number, it is used as a property key, and JavaScript automatically converts it to a string. hence its output as String one

//obj['1'] = 'String One';: This line adds another property to the obj object with key '1' (a string) and value 'String One'.

//When we check if obj[1] === obj['1'], we are comparing the same item inside the box, so it's true that they are equal.
