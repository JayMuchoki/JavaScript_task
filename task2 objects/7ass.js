function getSubsets(str) {
    const subsets = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subsets.push(str.substring(i, j));
        }
    }
    return subsets;
}

const str = "dog";
const result = getSubsets(str);
console.log(result);
