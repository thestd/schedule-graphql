const { fetchGroupSchedule, fetchTeacherSchedule, fetchGroups, fetchTeachers, fetchFaculties } = require('../../api/pnu-api')

const resolvers = {
    Query: {
        groupSchedule: (obj, args) => {
            console.log("groupSchedule | args => : ", args);
            return fetchGroupSchedule(args.group, args.date_from, args.date_to)
        },
        teacherSchedule: (obj, args) => {
            console.log("teacherSchedule | args => : ", args);
            return fetchTeacherSchedule(args.teacher, args.date_from, args.date_to)
        },
        groups: (obj, args) => {
            console.log("groups | args => : ", args);
            return fetchGroups(args.query)
        },
        teachers: (obj, args) => {
            console.log("teachers | args => : ", args);
            return fetchTeachers(args.query, args.faculty)
        },
        faculties: (obj, args) => {
            console.log("faculties | args => : ", args);
            return fetchFaculties(args.query, args.code)
        },
    },
};

module.exports.resolvers = resolvers
