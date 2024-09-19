export default class Info {
    #szuloelem;
    constructor(szuloelem) {
      this.#szuloelem = szuloelem;
      this.megjelenit();
    }
  
    megjelenit() {
      $(this.#szuloelem).append(`
        <div class="nevek flex-container">
        <div class="elso">
          <p>X játékos: <input type='text'></p></div>
        <div class="masodik">
          <p>O játékos: <input type='text'></p></div>
        </div>
        <div class="kovetkezo">
          <p>kk</p></div>
        <div class="nyertes">
          <p>kk</p></div>
        </div>
      `);
    }
  }
  