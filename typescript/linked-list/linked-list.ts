class Item<TElement> {
  public valor: TElement;
  public proximo: Item<TElement>|undefined; //Começa como undefined porque não há próximo ou anterior no início
  public anterior: Item<TElement>|undefined;

  constructor(valor:TElement ) {
    this.valor = valor;
  }
}

export class LinkedList<TElement> { //generico => <blablabla>: Usa-se quando não se sabe qual o tipo de elemento vai ser trabalhado
  private inicio:Item<TElement>|undefined;
  private fim:Item<TElement>|undefined;

  public push(coisa: TElement) {
    const item = new Item(coisa);
    if(this.fim === undefined){
      this.fim = item;
      this.inicio = item;
    } else {
    this.fim.proximo = item;
    item.anterior = this.fim;
    this.fim = item;
    }
  }

  public pop(): TElement {
    if(this.fim === undefined){
      throw new Error ('A lista tá vazia, não posso retirar se não tem nada né fi?');
    
    } else {
      const retorno = this.fim.valor;
      const novoFim = this.fim.anterior;
      if(novoFim == undefined){
        this.fim = undefined;
        this.inicio = undefined;
      } else {
      novoFim.proximo = undefined;
      this.fim = novoFim;
      }
      return retorno;
    }
  }

  public shift(): TElement {
    if(this.inicio === undefined){
      throw new Error ('Impossível realizar o shift');
    } else {
      const retorno = this.inicio.valor;
      const novoInicio = this.inicio.proximo;

      if(novoInicio !== undefined){
        novoInicio.anterior = undefined;
        this.inicio = novoInicio;
      } else {
        this.fim = undefined;
        this.inicio = undefined;
      }
      return retorno;
    }
  }

  public unshift(element: TElement) {
    const item = new Item(element);
    if(this.inicio === undefined){
      this.fim = item;
      this.inicio = item;
    } else {
    this.inicio.anterior = item;
    item.proximo = this.fim;
    this.inicio = item;
    }
  }

  public delete(element: TElement) {
    if(this.inicio === undefined){
      return 0;
    }
    
    let itemAtual = this.inicio;
    if (this.fim == this.inicio && itemAtual.valor == element) {
      this.fim = undefined;
      this.inicio = undefined;
    }
    while (itemAtual.proximo) {
      if (itemAtual.valor == element) {
          const anterior =  itemAtual.anterior;
          const proximo = itemAtual.proximo;

          itemAtual.anterior = undefined;
          itemAtual.proximo = undefined;
        if (anterior != undefined) {
          anterior.proximo = proximo;
        } else {
          this.inicio = proximo;
        }
        
        if (proximo !== undefined) {
          proximo.anterior = anterior;
        } else {
          this.fim = anterior;
        }

        break;
      }
      itemAtual = itemAtual.proximo;
    }
  }

  public count(): number { 
    if(this.inicio === undefined){
      return 0;
    }
    var contador = 1;
    var itemAtual = this.inicio;
    while(itemAtual.proximo){
      contador++;
     itemAtual = itemAtual.proximo;
    }
  return contador;
  }
}
