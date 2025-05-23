import Usuarios from "../models/Usuario.mjs";

export default class UsuariosController {

    listar() {
        const usuario = new Usuarios();
        return usuario.all();
    }
    adicionar(nome, idade, administrador) {
        const usuario = new Usuarios(nome, idade, administrador);
        usuario.add();
    }
}
