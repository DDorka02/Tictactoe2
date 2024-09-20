export default class Elem {
  #id;
  #kattinhato;
  #ertek;
  #elem;
  #pElem;

  constructor(id) {
    this.#id = id;
    this.#kattinhato = true;
    this.#ertek = " ";
    this.#elem = $(`<div class="elem"><p></p></div>`);
    this.#pElem = this.#elem.find("p");
    this.#elem.on("click", () => {
      if (this.kattinthato) {
        this.trigger("k");
        this.kattinthato = false;
      }
    });
  }

  setErtek() {
      if (this.#ertek === "X") {
        this.#ertek = "O";
      } else {
        this.#ertek = "X";
      }
    }
  


  trigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this.#id });
    window.dispatchEvent(e);
  }

}
