const fetch = require('node-fetch');
const { buildQueryParams } = require('./utils')

const baseUrl = 'https://pnu-api.herokuapp.com'
const apiUrl = `${baseUrl}/api`

async function pnuApiCall(url) {
    let options = { headers: { "Content-Type": "application/json" } };
    return await fetch(encodeURI(url), options).then(res => res.json());
}

async function fetchGroupSchedule(group, date_from, date_to) {
    let queryParams = buildQueryParams({
        group: group,
        date_from: date_from,
        date_to: date_to,
    });
    return await pnuApiCall(`${apiUrl}/schedule?${queryParams}`);
}

async function fetchTeacherSchedule(teacher, date_from, date_to) {
    let queryParams = buildQueryParams({
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

async function fetchFaculties(query, code) {
    let faculties = await pnuApiCall(`${apiUrl}/faculties`);
    let filterPredicate = (x, y, test) => x && y ? test(y) : true;
    return faculties.filter(x =>
        filterPredicate(query, x.name, x => x.toLowerCase().includes(query.toLowerCase())) &&
        filterPredicate(code, x.code, x => x === code)
    );
}


module.exports = {
    fetchGroupSchedule,
    fetchTeacherSchedule,
    fetchGroups,
    fetchTeachers,
    fetchFaculties,
}
