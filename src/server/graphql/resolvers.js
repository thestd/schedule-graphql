const { fetchGroupSchedule, fetchTeacherSchedule, fetchGroups, fetchTeachers, fetchFaculties } = require('../../api/pnu-api')
const { toGroupScheduleDto, toTeacherScheduleDto } = require('../dto/mapper')

const resolvers = {
    Query: {
        groupSchedule: async (obj, args) => {
            console.log("groupSchedule | args => : ", args);
            let response = await fetchGroupSchedule(args.group, args.dateFrom, args.dateTo);
            return toGroupScheduleDto(response)
        },
        teacherSchedule: async (obj, args) => {
            console.log("teacherSchedule | args => : ", args);
            let response = await fetchTeacherSchedule(args.teacher, args.dateFrom, args.dateTo);
            return toTeacherScheduleDto(response)
        },
        groups: async (obj, args) => {
            console.log("groups | args => : ", args);
            return fetchGroups(args.query)
        },
        teachers: async (obj, args) => {
            console.log("teachers | args => : ", args);
            return fetchTeachers(args.query, args.faculty)
        },
        faculties: async (obj, args) => {
            console.log("faculties | args => : ", args);
            return fetchFaculties(args.query, args.code)
        },
    },
};

module.exports.resolvers = resolvers
