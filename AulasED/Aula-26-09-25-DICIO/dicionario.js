const apiResponse = {
    status: "success",
    data: { 
            id: 1,
            name: "Livro A",
            preco: 100
    }
}

console.log(apiResponse.data.name) // Para exibir o nome do produto
console.log(apiResponse.data.preco) // Para exibir o preço do produto
console.log(apiResponse.status) // Para exibir o status da resposta

// Criando um dicionário com um objeto
const dicionario = {
    nome: "João",
    idade: 30,
    profissao: "Encanador"
}

console.log(dicionario.nome) 
console.log(dicionario["idade"])