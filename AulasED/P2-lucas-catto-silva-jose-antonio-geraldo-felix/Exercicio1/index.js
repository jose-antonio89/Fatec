const sorter = require("./Sorters.js");

const array = [64, 34, 25, 12, 22, 11, 90];

console.log("Bubble Sort:");
var arrayBubble = sorter.bubbleSort(array);
console.table(arrayBubble);

console.log("Merge Sort:");
var arrayMerge = sorter.mergeSort(array);
console.table(arrayMerge);

/* O Bubble, porque o merge divide a lista completamente antes de ordenar */