// Exercício 1: Cadastro de Alunos
class CadastroAlunos {
    constructor() {
        this.alunos = {};
    }

    matricularAluno(matricula, nome) {
        this.alunos[matricula] = nome;
    }

    obterAluno(matricula) {
        return this.alunos[matricula];
    }

    removerAluno(matricula) {
        const alunoRemovido = this.alunos[matricula];
        delete this.alunos[matricula];
        return alunoRemovido;
    }

    listarAlunos() {
        console.log("=== LISTA DE ALUNOS ===");
        for (const matricula in this.alunos) {
            console.log(`Matrícula: ${matricula} - Nome: ${this.alunos[matricula]}`);
        }
    }

    quantidadeAlunos() {
        return Object.keys(this.alunos).length;
    }

    estaVazio() {
        return this.quantidadeAlunos() === 0;
    }
}

// Exemplo de uso
console.log("--------------------");
console.log("EXERCÍCIO 1 - CADASTRO DE ALUNOS");

const cadastro = new CadastroAlunos();

console.log("\n--- Matriculando alunos ---");
cadastro.matricularAluno("2024001", "Ana Silva");
cadastro.matricularAluno("2024002", "Carlos Santos");
cadastro.matricularAluno("2024003", "Maria Oliveira");

cadastro.listarAlunos();

console.log(`\nAluno com matrícula 2024002: ${cadastro.obterAluno("2024002")}`);
console.log(`Total de alunos: ${cadastro.quantidadeAlunos()}`);
console.log(`Cadastro vazio: ${cadastro.estaVazio()}`);

module.exports = CadastroAlunos;