import JatekTer from "../View/Jatekter.js";
import Modell from "../Modell/Modell.js";
import Info from "../View/Info.js";

export default class Controller{
    #lepes;
    #lista=[];
    constructor(){
        this.#lepes=0;
        this.#lista=[]
        this.ADATOK = $(".adatok");
        this.TARALOM = $(".jatekter")
        this.Modell = new Modell();
        new Info(this.ADATOK)
        new JatekTer(this.TARALOM)
    }
}