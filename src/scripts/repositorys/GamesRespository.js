export class GamesRepository {
    constructor(connection) {
        this.connect = connection
    }

    async GetGames() {
        const games = await this.connect.query('SELECT * from games');

        return games.rows;
    }
}