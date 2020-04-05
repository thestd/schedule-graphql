const { gql } = require('apollo-server');

const typeDefs = gql`
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
  
  type ScheduleResource {
    group: String
    schedule: [Schedule]
  }
  
  type Faculty {
    name: String
    code: Int
  }

  type Query {
    scheduleResource(group: String, teacher: String, date_from: String, date_to: String): ScheduleResource!
    groups(query: String): [String]
    teachers(query: String, faculty: Int): [String]
    faculties: [Faculty]
  }
`;

exports.typeDefs = typeDefs
