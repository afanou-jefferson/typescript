"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.getVille = function () {
        return this._ville;
    };
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo("Nantes", 1);
console.log(nantesCeMatin.toString());
