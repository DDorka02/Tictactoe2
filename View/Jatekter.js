import Elem from "./Elem.js";

export default class JatekTer {
  #lista = [];
  #Elem;
  constructor(Elem) {
    this.#lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    new Elem(Elem);
    this.megjelenit();
    $(window).on("k", (event) => {
      console.log(event.detail);

    });
  }

  megjelenit() {
    let szuloElem = $(".jatekter");
    szuloElem.empty();
    this.#lista.forEach((index) => {
      new Elem(index);
    });
  }
}
