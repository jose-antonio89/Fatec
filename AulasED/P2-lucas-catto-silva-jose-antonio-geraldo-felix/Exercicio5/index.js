const grafos = require("./grafos.js")

const InstanciaGrafo = new grafos();

const vertices = ['Alice', 'Bruno', 'Carlos', 'Diana'];

vertices.forEach(vertice => {

    InstanciaGrafo.adicionarVertice(vertice);
});

const arestas = [
    ['Alice', 'Bruno'],
    ['Bruno', 'Carlos'],
    ['Carlos', 'Diana'],
    ['Alice', 'Diana']
];

arestas.forEach(aresta => {

    InstanciaGrafo.adicionarVertice(aresta);
});

console.log(InstanciaGrafo.imprimirGrafo());

InstanciaGrafo.removerAresta('Carlos', 'Diana');

console.log(InstanciaGrafo.imprimirGrafo());
