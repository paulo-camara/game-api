import express from 'express';
import { Database } from './src/scripts/database';
import { GamesRepository } from './src/scripts/repositorys/GamesRespository';

const app = express();
app.use(express.json());

app.get('/list-games', async (req, response) => {
    const db = new Database();
    
    await db.PostgresConnect();
    try {
        const Game = new GamesRepository(db.clientPostgres);

        const games = await Game.GetGames();
        return response.status(200).send({ msg: games })
    } catch (err) {
        return response.status(500).send({ msg: err })
    }

});

app.post('/save-game', () => {
    //rout of save games
});

app.listen(3000, () => {
    console.log(`App listening on port 3000!`);
});