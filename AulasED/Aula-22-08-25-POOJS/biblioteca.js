class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    listarLivros() {
        console.log("\n--- Livros na Biblioteca ---");
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
            return;
        }
        this.livros.forEach(livro => {
            console.log(`- Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        });
        console.log("----------------------------");
    }

    buscarPorAutor(autor) {
        const livrosDoAutor = this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );

        console.log(`\n--- Busca por autor: "${autor}" ---`);
        if (livrosDoAutor.length === 0) {
            console.log(`Nenhum livro encontrado para o autor "${autor}".`);
            return;
        }
        livrosDoAutor.forEach(livro => {
            console.log(`- Título: ${livro.titulo}, Ano: ${livro.ano}`);
        });
        console.log("-------------------------------");
        
        return livrosDoAutor;
    }
}

module.exports = Biblioteca;
