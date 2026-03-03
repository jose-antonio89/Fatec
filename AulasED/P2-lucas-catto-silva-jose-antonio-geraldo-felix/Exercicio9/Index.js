const grafoponderado = require('./grafosPonderado.js')

const instanciaGrafo = new grafoponderado();

const vertices = ['Brotas', 'Perderneiras', 'Bauru', 'Barra Bonita'];

vertices.forEach(vertice => {

    instanciaGrafo.adicionarVertice(vertice);
});

const arestas = [
    ['Brotas', 'Perderneiras'],
    ['Bauru', 'Brotas'],
    ['Barra Bonita', 'Perderneiras'],
    ['Brotas', 'Barra Bonita']
];


console.log(instanciaGrafo.bfs('Brotas'));