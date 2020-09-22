"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return this.prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        var sejour1 = new Sejour("Paris", 100);
        var sejour2 = new Sejour("Montpellier", 0);
        var sejour3 = new Sejour("Lyon", 50);
        this.arrSejour = [sejour1, sejour2, sejour3];
    }
    SejourService.prototype.getByNom = function (nomCherche) {
        var returned = new Sejour("default", 0);
        for (var _i = 0, _a = this.arrSejour; _i < _a.length; _i++) {
            var sej = _a[_i];
            if (sej.getNom() == nomCherche) {
                returned = sej;
            }
        }
        return returned;
    };
    return SejourService;
}());
var newSejourService = new SejourService();
console.log(newSejourService.getByNom("Paris"));
