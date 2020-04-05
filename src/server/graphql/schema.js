const { gql } = require('apollo-server');

const typeDefs = gql`
  type Faculty {
    name: String
    code: Int
  }
  
  type ScheduleItem {
    number: String
    time_bounds: String
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
    groupSchedule(group: String!, date_from: String, date_to: String): GroupSchedule!
    teacherSchedule(teacher: String!, date_from: String, date_to: String): TeacherSchedule!
    groups(query: String): [String]
    teachers(query: String, faculty: Int): [String]
    faculties(query: String, code: Int): [Faculty]
  }
`;

module.exports.typeDefs = typeDefs
