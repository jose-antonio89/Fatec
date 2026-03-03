class GrafoPonderado {
    constructor() {
        // Conjunto de vértices únicos
        this.vertices = new Set();

        // Mapa onde cada vértice aponta para uma lista de objetos: { vertice, peso }
        this.adjacencia = new Map();
    }

    // Adiciona um novo vértice ao grafo. Se já existir, nada é feito.
    // Também inicializa sua lista de adjacência.
    adicionarVertice(v) {
        // Garante que o vértice está no conjunto
        this.vertices.add(v);
        if (!this.adjacencia.has(v)) {
            // Inicializa lista de vizinhos se ainda não existir
            this.adjacencia.set(v, []);
        }
    }

    // Adiciona uma aresta ponderada entre dois vértices.
    // Cria os vértices caso ainda não existam. Por padrão,
    // é um grafo direcionado.
    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);

        this.adjacencia.get(origem).push({ vertice: destino, peso });

        // Se o grafo for não-direcionado, descomente a linha abaixo:
        // this.adjacencia.get(destino).push({ vertice: origem, peso });
    }

    // Mostra a representação do grafo como lista de adjacência,
    // com os pesos visíveis.
    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(', ');
            console.log(`${v} -> ${lista}`);
        }
    }

    // Gera e imprime a matriz de adjacência do grafo.
    // Usa Infinity para representar ausência de aresta
    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0; // distância para si mesmo = 0
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });

        console.log('Matriz de Adjacência (valores ∞ representam ausência de aresta):');
        console.log('    ' + vertices.join(' '));
        matriz.forEach((linha, i) => {
            console.log(vertices[i] + ' | ' + linha.map(x => x === Infinity ? '∞' : x).join(' '));
        });
    }

    // Busca em Profundidade (Depth-First Search)
    // Realiza uma busca em profundidade, visitando
    // o vértice inicial e seus vizinhos recursivamente
    // até esgotar os caminhos
    dfs(inicio) {
        const visitados = new Set();
        const resultado = [];

        const visitar = (v) => {
            visitados.add(v);
            resultado.push(v);

            for (const vizinho of this.adjacencia.get(v)) {
                if (!visitados.has(vizinho.vertice))
                    visitar(vizinho.vertice);
            }
        };

        visitar(inicio);
        console.log('DFS:', resultado.join(' -> '));
    }

    // Busca em Largura (Breadth-First Search)
    // Realiza uma busca em largura, explorando
    // primeiro os vizinhos mais próximos, usando uma fila.
    bfs(inicio) {
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0) {
            const atual = fila.shift();
            resultado.push(atual);

            for (const vizinho of this.adjacencia.get(atual)) {
                if (!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log('BFS:', resultado.join(' -> '));
    }

    // Algoritmo de Dijkstra para encontrar o caminho mais curto
    // Calcula as menores distâncias entre o vértice inicial e
    // todos os demais, com base nos pesos das arestas.
    // Usa a abordagem clássica de Dijkstra.
    dijkstra(inicio) {
        const distancias = {};
        const anteriores = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of this.vertices) {
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while (naoVisitados.size > 0) {
            // Encontra o vértice não visitado com a menor distância conhecida
            const atual = [...naoVisitados].reduce((a, b) => 
                distancias[a] < distancias[b] ? a : b
            );
            naoVisitados.delete(atual);

            // Atualiza distâncias para vizinhos
            for (const vizinho of this.adjacencia.get(atual)) {
                const alt = distancias[atual] + vizinho.peso;
                if (alt < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }

        // Exibe o resultado
        console.log(`Menores distâncias a partir de ${inicio}:`);
        for (const v of this.vertices) {
            console.log(`${v}: ${distancias[v]}`);
        }
    } // Fecha dijkstra
} // Fecha GrafoPonderado

// Exporta a classe para uso em outros módulos
module.exports = GrafoPonderado;