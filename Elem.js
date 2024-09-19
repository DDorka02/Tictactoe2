export default class Elem{
    #ertek="";
    #szuloelem;
    #divElem;
    #id=0;
    constructor(id, ertek,szuloelem){
        this.#id=id;
        this.#ertek=ertek;
        this.#szuloelem=szuloelem
        this.#megjelenit()
        this.#divElem=this.#szuloelem.children("div:last-child")
        this.#divElem.on("click", () =>
        {   
            console.log(this.#id)
            if (this.#ertek === " "){
            this.#trigger("lepes")}
        })
    }
    // a this function névtelen függvénnyel használva arra az elemre muttat amerre kattintottunk, tehát egy html elem. nyílt függvény esemény pedig az objektum példányára fog mutatni

    #megjelenit(){
        let txt= `<div><p>${this.#ertek}</p></div>`
        this.#szuloelem.append(txt)
    }

    /* az osztály úgy tud információt adni magától egsy adott bekövetkeztetekor, amire a másik osztály fel tud iratkozni */
    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#id})
        window.dispatchEvent(e)
    }
}