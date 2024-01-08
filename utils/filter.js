export const getOrderBy = (orderBy = 'id', sortBy = 'DESC') => {
    return [[orderBy, sortBy]];
};

export const calcOffset = (limit, maxLimit, page = 1) => {
    const currentLimit = limit > maxLimit ? maxLimit : limit;

    return (page - 1) * currentLimit;
};
