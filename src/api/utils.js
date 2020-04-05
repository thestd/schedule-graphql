function buildQueryParams(params) {
    return Object.keys(params)
        .filter(key => params[key] !== undefined)
        .map(key => key + '=' + params[key])
        .join('&');
}

module.exports = {
    buildQueryParams,
}
