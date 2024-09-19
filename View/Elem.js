export default class Elem {
  #szuloelem;
  #divElem;
  #id = 0;
  constructor(id, ertek, szuloelem) {
    this.#szuloelem = szuloelem;
    this.#id = id;
    this.kattinthat = true;
    this.#megjelenit();
    this.#divElem = this.#szuloelem.children("div:last-child");
    this.#divElem.on("click", () => {
      if (this.kattinthat) {
        this.#trigger("k");
        this.kattinthat = false;
      }
    });
  }

  #megjelenit() {
    let txt = `<div class="elem"><p></p></div>`;
    this.#szuloelem.append(txt);
  }

  setErtek() {
    this.#divElem.html(jel);
  }

  #trigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this.#id });
    window.dispatchEvent(e);
  }
}
