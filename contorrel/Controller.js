import JatekTer from "../View/Jatekter.js";
//import Modell from "../Modell/Modell.js";
import Info from "../view/Info.js";

export default class Controller{

    constructor(){
        this.ADATOK = $(".adatok");
        this.TARALOM = $(".jatekter")
        /*this.modell = new Modell();
        this.index = modell.getIndex();*/
        new Info(this.ADATOK)
        new JatekTer()
    }
}