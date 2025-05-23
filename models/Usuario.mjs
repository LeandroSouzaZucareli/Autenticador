import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

export default class Usuarios {

    constructor(nome, idade, administrador){
        this.nome = nome;
        this.idade = idade;
        this.administrador = administrador;
    }

    async add() {

        try {
            await client.connect();
            const db = client.db('db38');
            const collection = db.collection('users');
            const insertResult = await collection.insertOne({ nome: this.nome, idade: this.idade, admim: this.administrador});
            return insertResult;
        } catch (error) {
            return 'Erro durante a requisição do banco : ${error}';
        } finally {
            // Fecha a conexão
            client.close();
        }
    }

    async all() {
        try {
            await client.connect();
            const db = client.db('db3B');
            const collection = db.collection('users');
            const findResult = await collection.find({}).toArray();
            return findResult;
        } catch (error) {
            return 'Error durante a requisição do banco : ${error}';
        } finally {
            // Fecha a conexão
            client.close();
        }

    }

}