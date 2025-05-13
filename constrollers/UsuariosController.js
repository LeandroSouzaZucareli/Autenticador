import Usuarios from "../models/Usuario.JS";

export default class UsuariosController {
    constructor(){
}

listar() {
    const usuario = new Usuarios();
    return usuario.all();
}

adicionar() {
    const usuario = new Usuarios("João", 70, false);
    usuario.add();
    }
}