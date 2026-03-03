const Sorter = require('./Sorter');

const lista = [7, 2, 5, 1, 9];

console.log("Bubble Sort:", Sorter.bubbleSort(lista));
console.log("Quick Sort:", Sorter.quickSort(lista));
console.log("Merge Sort:", Sorter.mergeSort(lista));