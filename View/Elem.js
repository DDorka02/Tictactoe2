export default class Elem {
    #szuloelem;
    #divElem;
    #id;
    constructor(id, szuloelem) {
    this.#szuloelem = szuloelem;
    this.#id = id;
    this.kattinhato = true;
    this.megjelenit();
    this.divElem = $(".elem:last-child");
    this.pElem = this.divElem.children("p");
    this.divElem.on("click", () => {
      if (this.kattinthato) {
        this.trigger("k");
        this.kattinthato = false;
      }
    });
  }

  megjelenit() {
    $(this.#szuloelem).append(`<div class="elem"><p></p></div>`);
    
  }

  setErtek(jel) {
    this.pElem.html(jel);
  }
  getIndex() {
    return this.#id;
  }
   
    
  trigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this.#id });
    window.dispatchEvent(e);
  }

}