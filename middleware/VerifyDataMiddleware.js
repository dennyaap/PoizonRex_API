import { matchedData } from 'express-validator';
import crypto from 'crypto';

import ApiError from '../error/ApiError.js';

const calculateHash = (string) => {
    const secret = crypto.createHmac('sha256', 'WebAppData').update(process.env.BOT_TOKEN);
    return crypto.createHmac('sha256', secret.digest()).update(string).digest('hex');
};

export default function (req, res, next) {
    try {
        const data = matchedData(req);
        const initData = data.initData;

        const urlParams = new URLSearchParams(initData);

        const hash = urlParams.get('hash');
        urlParams.delete('hash');
        urlParams.sort();

        const dataCheckString = [...urlParams.entries()].map((value) => value.join('=')).join('\n');

        const calculatedHash = calculateHash(dataCheckString);

        if (calculatedHash === hash) {
            return next();
        }

        return next(ApiError.forbiden('Not authorized'));
    } catch (e) {
        console.log(e);
        return false;
    }
}
