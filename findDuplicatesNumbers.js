function findDuplicatesNumbers(arr) {
    let n = new Set();
    let duplicates = [];

    for (let num of arr) {
        if (n.has(num)) {
            duplicates.push(num);
        } else {
            n.add(num);
        }
    }
    return duplicates;
}
console.log(findDuplicatesNumbers([1, 2, 3, 4, 2, 5, 1]));