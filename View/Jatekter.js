import Elem from "./Elem.js";

export default class JatekTer{
    #aktElem;
    #lista=[]
    #taroloElem
    constructor(){
        this.#aktElem="X"
        this.#lista=[" "," "," "," "," "," "," "," "," "]
        this.#taroloElem=taroloElem
        this.#taroloElem.empty()
        this.megjelenit()
            $(window).on("k",(event)=>{
                console.log(event.detail)
                let id =event.detail
                this.#beallit(id)

            })
        
    }

    #beallit(id){
        this.#lista[id]=this.#aktElem;
        if (this.#aktElem === "X"){
            this.#aktElem = "O"
        }
        else{
            this.#aktElem = "X";
        }
        this.megjelenit()
    }

    megjelenit(){
        this.#lista.forEach((index)=>{
            new Elem(index,this.#taroloElem)
        })
    }

}