import JatekTer from "../View/Jatekter.js";
import Modell from "../Modell/Modell.js";
import Info from "../View/Info.js";

export default class Controller{
    constructor() {
        const ADATOK =$(".adatok")
        const TARTALOM = $(".jatekter")
        this.MODELL = new Modell();
        new Info(ADATOK)
        new JatekTer(TARTALOM);
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