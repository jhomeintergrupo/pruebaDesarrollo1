"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var Server = /** @class */ (function () {
    //Se inicializa aplicacion express y configuracion servidor
    function Server() {
        this.app = express_1["default"]();
        this.config();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1["default"]('dev'));
    };
    Server.prototype.rutas = function () {
    };
    //Metodo inicia servidor
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Escuchando por puerto", _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
