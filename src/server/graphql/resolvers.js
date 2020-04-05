const { fetchSchedule, fetchGroups, fetchTeachers, fetchFaculties } = require('../../api/pnu-api')

const resolvers = {
    Query: {
        scheduleResource: (obj, args) => {
            console.log("scheduleResource | args => : ", args);
            return fetchSchedule(args.group, args.teacher, args.date_from, args.date_to)
        },
        groups: (obj, args) => {
            console.log("groups | args => : ", args);
            return fetchGroups(args.query)
        },
        teachers: (obj, args) => {
            console.log("teachers | args => : ", args);
            return fetchTeachers(args.query, args.faculty)
        },
        faculties: () => {
            console.log("faculties");
            return fetchFaculties()
        },
    },
};

module.exports.resolvers = resolvers
