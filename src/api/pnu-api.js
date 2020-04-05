const fetch = require('node-fetch');

const baseUrl = 'https://pnu-api.herokuapp.com'

async function pnuApiCall(path) {
    let url = `${baseUrl}/api/${path}`;
    let options = { headers: { "Content-Type": "application/json" } };
    return await fetch(encodeURI(url), options).then(res => res.json());
}

async function fetchSchedule(group, teacher, date_from, date_to) {
    let params = {
        group: group,
        teacher: teacher,
        date_from: date_from,
        date_to: date_to,
    }
    let queryParams = Object.keys(params)
        .filter(key => params[key] !== undefined)
        .map(key => key + '=' + params[key])
        .join('&');
    return await pnuApiCall(`schedule?${queryParams}`);
}

module.exports = {
    fetchSchedule,
}
