const { fetchSchedule, fetchGroups, fetchTeachers } = require('../../api/pnu-api')

const faculties = [
    {
        "name": "Фізико-технічний факультет",
        "code": 1001
    },
    {
        "name": "Факультет математики та інформатики",
        "code": 1002
    },
    {
        "name": "Економічний факультет",
        "code": 1003
    },
    {
        "name": "Інститут післядипломної освіти та довузівської підготовки",
        "code": 1004
    },
    {
        "name": "Коломийський навчально-науковий інститут",
        "code": 1005
    },
    {
        "name": "Навчально-науковий Інститут мистецтв",
        "code": 1006
    },
    {
        "name": "Навчально-науковий Юридичний інститут",
        "code": 1007
    },
    {
        "name": "Педагогічний факультет",
        "code": 1008
    },
    {
        "name": "Факультет іноземних мов",
        "code": 1009
    },
    {
        "name": "Факультет історії, політології і міжнародних відносин",
        "code": 1010
    },
    {
        "name": "Факультет природничих наук",
        "code": 1011
    },
    {
        "name": "Факультет туризму",
        "code": 1012
    },
    {
        "name": "Факультет фізичного виховання і спорту",
        "code": 1013
    },
    {
        "name": "Факультет філології",
        "code": 1014
    },
    {
        "name": "Філософський факультет",
        "code": 1015
    },
    {
        "name": "Загальноуніверситетські кафедри",
        "code": 1016
    },
    {
        "name": "Івано-Франківський коледж",
        "code": 1017
    },
    {
        "name": "Кафедра військової підготовки",
        "code": 1019
    }
]

const resolvers = {
    Query: {
        scheduleResource: (obj, args) => {
            console.log("scheduleResource | args => : " + args);
            return fetchSchedule(args.group, args.teacher, args.date_from, args.date_to)
        },
        groups: (obj, args) => {
            console.log("groups | args => : " + args);
            return fetchGroups(args.query)
        },
        teachers: (obj, args) => {
            console.log("teachers | args => : " + args);
            return fetchTeachers(args.query, args.faculty)
        },
        faculties: () => {
            console.log("faculties");
            return faculties
        },
    },
};

module.exports.resolvers = resolvers
