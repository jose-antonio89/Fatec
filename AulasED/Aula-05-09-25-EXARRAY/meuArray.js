
class meuArray {
  #items = [];
  #tamanho = 0;

  adicionar(elemento) {
    this.#items[this.#tamanho] = elemento;
    this.#tamanho++;
  }

  remover() {
    if (this.#tamanho === 0) {
      return undefined;
    }
    this.#tamanho--;
    const itemRemovido = this.#items[this.#tamanho];
    delete this.#items[this.#tamanho];
    return itemRemovido;
  }

  tamanhoArray() {
    return this.#tamanho;
  }

  obterElemento(indice) {
    if (indice < 0 || indice >= this.#tamanho) {
      return undefined;
    }
    return this.#items[indice];
  }

  limpar() {
    this.#items = [];
    this.#tamanho = 0;
  }

  verItens() {
    return this.#items.slice(0, this.#tamanho);
  }
}

module.exports = meuArray;