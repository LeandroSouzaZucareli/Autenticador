import Express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";

export default class Server {

    constructor() {
        this.Server = Express();
    }

    run(port) {
        this.middlewares();
        //this.route();
        this.Server.listen(port, () => {
            console.log('Server listen on port ${port}');
        })
    }

    middlewares() {
        this.Server.use(Express.json());
        this.Server.use(cors());
        this.Server.use(usuarioRoutes);
    }
}