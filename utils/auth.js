import jwt from 'jsonwebtoken';

export const generateJwt = (userId, roleId) => {
    return jwt.sign({ id: userId, roleId }, process.env.SECRET_KEY, {
        expiresIn: '24h',
    });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
};

export const getUserParameter = (initData, field) => {
    const urlParams = new URLSearchParams(initData);

    return urlParams.get(field);
};
