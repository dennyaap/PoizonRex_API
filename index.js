import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './db.js';
import router from './routes/index.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';

import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use('/api', router);

app.use(ErrorHandlingMiddleware);

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.WEB_API_URL;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Заходи в наш интернет-магазин PoizonRex!', {
            reply_markup: {
                inline_keyboard: [[{ text: 'Перейти к покупкам', web_app: { url: webAppUrl } }]],
            },
        });
    }
});

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
