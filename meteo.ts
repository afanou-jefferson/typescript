console.log("Meteo App");

class Meteo {
    
    constructor( private _ville:string, private _temperature:number){
    }

}

let nantesCeMatin = new Meteo("Nantes", 1);

console.log(nantesCeMatin.toString());