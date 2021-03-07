"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./Server"));
async function main() {
    await Server_1.default.listen(Server_1.default.get('port'));
    console.log("Servidor en puerto", Server_1.default.get('port'));
}
main();
