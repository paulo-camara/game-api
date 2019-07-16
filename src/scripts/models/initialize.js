import Sequelize from "sequelize";
import config from "../config";

const PostgresSequelize = new Sequelize(config.name_database, config.user, config.password, {
    host: 'localhost',
    dialect: 'postgres'
});

const usersTable = PostgresSequelize.define('users', {
    first_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

const gamesTable = PostgresSequelize.define('games', {
    name_game: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }
})

const force = { force: true };

usersTable.sync(force);
gamesTable.sync(force);
