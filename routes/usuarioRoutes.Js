import Express from "express";

import UsuariosController from "../constrollers/UsuariosController";

const router = Express.Router();

router.get('/api/usuarios', (req, res)=>{
    const usuarios = new UsuariosController();
    res.send(usuarios.listar());
});
router.get('/api/adcionar', (req, res)=>{
    const usuarios = new UsuariosController();
    usuarios.adicionar();
    res.send("usuario adicionado com sucesso!");
})

export default router;