const fetch = require('node-fetch');
const { buildQueryParams } = require('./utils')

const baseUrl = 'https://pnu-api.herokuapp.com'
const apiUrl = `${baseUrl}/api`

async function pnuApiCall(url) {
    let options = { headers: { "Content-Type": "application/json" } };
    return await fetch(encodeURI(url), options).then(res => res.json());
}

async function fetchSchedule(group, teacher, date_from, date_to) {
    let queryParams = buildQueryParams({
        group: group,
        teacher: teacher,
        date_from: date_from,
        date_to: date_to,
    });
    return await pnuApiCall(`${apiUrl}/schedule?${queryParams}`);
}

async function fetchGroups(query) {
    let queryParams = buildQueryParams({
        query: query
    });
    return await pnuApiCall(`${apiUrl}/groups?${queryParams}`);
}

async function fetchTeachers(query, faculty) {
    let queryParams = buildQueryParams({
        query: query,
        faculty: faculty
    });
    return await pnuApiCall(`${apiUrl}/teachers?${queryParams}`);
}


module.exports = {
    fetchSchedule,
    fetchGroups,
    fetchTeachers,
}
