import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import router from './routes/index.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';

import { User, Product } from './models/models.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api', router);

app.use(ErrorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, (err) => {
            if (err) {
                return console.log('err');
            }

            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
