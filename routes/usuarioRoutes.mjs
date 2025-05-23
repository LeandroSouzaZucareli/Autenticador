import Express from "express";

import UsuariosController from "../constrollers/UsuariosController.mjs";

const router = Express.Router();

router.get('/api/usuarios', async (req, res)=> {
    const usuarios = new UsuariosController();
    const result = await usuarios.listar();
    res.json({dados:result});
});
router.get('/api/adicionar', (req, res) => {
    
    const nome = req.query.nome;
    const idade = req.query.idade;
    const administrador = req.query.administrador;

    const usuarios = new UsuariosController();
    usuarios.adicionar(nome, idade, administrador);
    res.send('usuario ${nome} adicionado com sucesso!');
})
export default router;