import express from 'express';

const app = express();

app.use(express.json());

app.get('/list-games', () => {
    //route of list games
});

app.post('/save-game', ()=> {
    //rout of save games
});

app.listen(3000, () => {
    console.log(`App listening on port 3000!`);
});