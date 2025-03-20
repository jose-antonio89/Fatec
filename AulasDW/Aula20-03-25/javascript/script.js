
/* CONST define a vairavle como constante(não pode ser alterada, neste caso, não pode trocar de elemento do html).
document.getElementById('elementoHTML') pega um elemento html pelo id para ser programado no JS. */
const form = document.getElementById('formTarefa')
const input = document.getElementById('inputTarefa')
const lista = document.getElementById('listaTarefas')
/* addEventListener adiciona uma "escuta" a um evento do elemento html.
 'submit' é o evento que ocorre quando o formulário é enviado.
 function(event) cria a função que sera executada quando o evento ocorrer.
 event é a variavel que armazena as informações do evento que ocorreu.
*/
form.addEventListener('submit', function (event) {
    // Evita que o formulário seja envia e a página recarregada.
    event.preventDefault();

    // armazena o valor do input na variavel
    //"trim" retira espaços em branco do começo ao fim do texto. 
    
    const textoTarefa = input.value.trim();

    if (textoTarefa != '') {
        // cria um elemento html do tipo li
        const li = document.createElement('li');
        // adiciona o texto do input no elemento li
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "X";
        // adiciona a classe remover ao botão criado
        botaoRemover.classList.add('remover');
        // adiciona o elemento li a lista de tarefas
        botaoRemover.addEventListener('click', function () {
            lista.removeChild(li);
        });
        // adiciona o botão Remover ao elemento li 
        li.appendChild(botaoRemover);
        // adiciona o elemento li a lista de tarefas
        lista.appendChild(li);
        // limpa o valor do input
        input.value = '';
    }
});