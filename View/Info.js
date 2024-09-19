export default class Info {
  #elem;
  constructor(elem) {
    this.#elem = elem;
    this.#megjelenit();
  }

  #megjelenit() {
    let txt = `<div class="nevek row">
            <p class="col-lg-6">X játékos</p><input type='text' class="col-lg-6">
            <p class="col-lg-6">O játékos</p><input type='text' class="col-lg-6">
          </div>
    
          <div class="kovetkezo row">
              <p>kk</p></div>`;
    this.#elem.append(txt);
  }
}
