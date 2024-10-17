export default class Elem {
  #szuloelem;
  #divElem;
  #id;
  constructor(id, szuloelem) {
    this.#szuloelem = szuloelem;
    this.#id = id;
    this.kattinhato = true;
    this.megjelenit();
    this.divElem = $(".elem:last");
    this.divElem.on("click", () => {
      if (this.kattinhato) {
        this.#trigger("kivalaszt");
        this.kattinhato = false;
      }
    });
  }

  megjelenit() {
    $(this.#szuloelem).append(`<div class="elem"><p></p></div>`);
  }

  #trigger(esemenynev) {
    this.divElem.on("click", () => {
      const e = new CustomEvent(esemenynev, { detail: this });
      window.dispatchEvent(e);
    });
  }
}
