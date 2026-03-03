
const BinaryTree = require("./BinaryTree");
const AVLTree = require("./AVL.js");

var binaryTreeInstance = new BinaryTree();
var avlTreeInstance = new AVLTree();

const elementos = [10, 20, 30, 40, 50, 60];

elementos.forEach(elemento => {
    
    binaryTreeInstance.insert(elemento);
    avlTreeInstance.insert(elemento);
});

console.log(binaryTreeInstance.getRoot());
console.log("---");
console.log(avlTreeInstance.getRoot());

/* A arvore AVL é melhor por se organizar automaticamente ao 
 * invés de inserir os valores de maneira desordenada como a binary tree, 
 * ela vai se ramificando de maneira igual, se dividindo entre direita e esquerda ordenadamente.
 */
