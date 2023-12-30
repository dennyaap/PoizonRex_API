export const findFilterFields = (params, optionalParams) => {
    return Object.keys(params).reduce((obj, key) => {
        if (optionalParams.includes(key)) {
            obj[key] = params[key];
            return obj;
        }
    }, {});
};
