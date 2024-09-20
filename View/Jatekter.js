import Elem from "./Elem.js";

export default class JatekTer {
  #aktElem;
  #lista = [];
  #taroloElem;
  constructor(taroloElem) {
    this.#aktElem = "X";
    this.#lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.#taroloElem = taroloElem;
    this.megjelenit();
    
  }

  megjelenit() {
    let szuloElem = $(".jatekter");
    szuloElem.empty();
    this.#lista.forEach((value, index) => {
      new Elem(index,szuloElem);
    });
  }
}
 