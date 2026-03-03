class Sorter {
    /*
     * Bubble Sort
     */
    static bubbleSort(arr) {
        const array = [...arr]; // copia para não alterar o original
        let n = array.length; // tamanho do array
        let trocou;
 
        // repeticao dentro do outro = +custo de processamento
        do {
            trocou = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]]; // troca os elementos
                    trocou = true;
                }
            }
            n--;
        } while (trocou); // enquanto trocou for falsa, repete
 
        return array;
    }
 
 
    /*
     * Quick Sort
     */
    static quickSort(arr) {
        if (arr.length <= 1) return arr;
 
        const pivot = arr[arr.length - 1];
        const menores = [];
        const maiores = [];
 
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i]);
            }
        }
 
        return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
    }
 
 
    /*
 * Merge Sort
 */
    static mergeSort(arr) {
        if (arr.length <= 1) return arr;
 
        const meio = Math.floor(arr.length / 2);
        const esquerda = Sorter.mergeSort(arr.slice(0, meio));
        const direita = Sorter.mergeSort(arr.slice(meio));
 
        return Sorter.merge(esquerda, direita);
    }
 
    static merge(esquerda, direita) {
        const resultado = [];
        let i = 0, j = 0;
 
        while (i < esquerda.length && j < direita.length) {
            if (esquerda[i] < direita[j]) {
                resultado.push(esquerda[i++]);
            } else {
                resultado.push(direita[j++]);
            }
        }
 
        return resultado
            .concat(esquerda.slice(i))
            .concat(direita.slice(j));
    }
}
 
module.exports = Sorter;