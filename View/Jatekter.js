import Elem from "./Elem.js";

export default class JatekTer {
  #lista;
  #taroloElem;
  constructor(taroloElem,lista) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.megjelenit();
    
  }

  megjelenit() {
    this.#taroloElem.empty();
    for (let index = 0; index < 9; index++) {
      new Elem(index, this.#taroloElem);
    }
    };
  }

 
