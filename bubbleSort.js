function bubbleSort(arr) {
    return arr.sort((a, b) => a - b);
    // for (let i = 0; i < size - 1; i++) {
    //     for (let j = 0; j < size - i - 1; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let sortNum = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = sortNum;
    //         }
    //     }
    // }
    // return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2]));