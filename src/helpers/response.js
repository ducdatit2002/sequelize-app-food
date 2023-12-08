const response = (payload, ...rest) => {
    return {
        status: "success",
        data: payload,
        ...rest,
    };
};

module.exports = {
    response,
}