const { gql } = require('apollo-server');

const typeDefs = gql`
  type Faculty {
    name: String
    code: Int
  }
  
  type ScheduleItem {
    number: String
    timeBounds: String
    info: String
  }

  type Schedule {
    date: String
    day: String
    items: [ScheduleItem]
  }

  type GroupSchedule {
    group: String 
    schedule: [Schedule]
  }
  
  type TeacherSchedule {
    teacher: String 
    schedule: [Schedule]
  }

  type Query {
    groupSchedule(group: String!, dateFrom: String, dateTo: String): GroupSchedule!
    teacherSchedule(teacher: String!, dateFrom: String, dateTo: String): TeacherSchedule!
    groups(query: String): [String]
    teachers(query: String, faculty: Int): [String]
    faculties(query: String, code: Int): [Faculty]
  }
`;

module.exports.typeDefs = typeDefs
