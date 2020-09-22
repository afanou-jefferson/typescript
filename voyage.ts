class Sejour {

    constructor ( private nom:string , private prix:number){
    }

    getNom():string {
        return this.nom;
    }

    getPrix():number {
        return this.prix;
    }
}

class SejourService {

    private arrSejour:Sejour[];

    constructor (){
        
        let sejour1 = new Sejour("Paris", 100);
        let sejour2 = new Sejour("Montpellier", 0);    
        let sejour3 = new Sejour("Lyon", 50);
        
        this.arrSejour = [sejour1, sejour2, sejour3];
    }

    getByNom( nomCherche:string ):Sejour{
        
        let returned = new Sejour("default", 0);

        for (let sej of this.arrSejour) {
            if ( sej.getNom() == nomCherche ){
                returned = sej;
            }
        }
        return returned;
    }

}

const newSejourService = new SejourService();

console.log(newSejourService.getByNom("Paris"));