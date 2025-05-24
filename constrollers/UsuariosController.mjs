import Usuarios from "../models/Usuario.mjs";

export default class UsuariosController {

    listar() {
        const usuario = new Usuarios();
        return usuario.all();
    }
    adicionar(nome, idade, administrador, email, senha) {
        const usuario = new Usuarios(nome, idade, administrador, email, senha);
        usuario.add();
    }
}
