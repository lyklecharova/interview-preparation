function isBalanced(str) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (map[char]) {
            stack.push(char);
        } else if (Object.values(map).includes(char)) {
            let last = stack.pop();
            if (map[last] !== char) return false;
        }
    }
    return stack.length === 0;
}
console.log(isBalanced("{[()]}"));