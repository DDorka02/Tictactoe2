
export default class Modell {
  #lista;
  #lepesszam;
  constructor() {
    this.#lepesszam = 0;
    this.#lista = ["", "", "", "", "", "", "", "", ""];
  }

  getAllapot() {
    return this.#lista;
  }

  setAllapot(index) {
    if (!this.#lista[index]) {
      this.#lepesszam[index] = this.#lepesszam % 2 == 0 ? "X" : "O";
    }
  }

  getErtek() {
    return this.#lepesszam;
  }

  getVegeVanE() {
   let vEll= this.#vizszintesGyozelem();
    if (vEll.indexOf("OOO") > -1) {
      return "O nyert";
    } else if (vEll.indexOf("XXX") > -1) {
      return "X nyert";
    } else if (this.#lepesszam === 9) {
      return "Döntetlen!";
    }
    return "tovabb";
  }
  #vizszintesGyozelem() {
    let vEll = "";
    for (let i = 0; i < 9; i++) {
      vEll += this.#lista[i];
      if (i % 3 === 2) {
        vEll += "@";
      }
    }
    vEll += "@";
    console.log(vEll);
    console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"));
    return vEll;
  }
}


