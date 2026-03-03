
const binary = require("./BinaryTree.js")

var bin = new binary();

const valores = [50, 30, 70, 20, 40, 60, 80];

valores.forEach(elemento => {
    
    bin.insert(elemento);
});

console.table(bin.preOrder());

// Reflete a Estrutura da Árvore
