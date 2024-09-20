import JatekTer from "../View/Jatekter.js";
import Modell from "../Modell/Modell.js";
import Info from "../View/Info.js";

export default class Controller{
    constructor() {
        const ADATOK =$(".adatok")
        this.MODELL = new Modell();
        new Info(ADATOK)
        for (let index = 0; index < 9; index++) {
          new JatekTer($(".jatekter"), index);
        }
    
        $(window).on("k", (event) => {
          console.log(event.detail); 
          this.MODELL.setAllapot(event.detail.getIndex());
          event.detail.setErtek(this.MODELL.getErtek());
    
          if (this.MODELL.getVegeVanE()!=="tovabb") {
            console.log(this.MODELL.getVegeVanE())
          }
          
        });
      }
}