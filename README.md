# schedule-graphql

A [GraphQL](https://graphql.org/) microservice that interacts with [schedule-API](https://github.com/thestd/schedule-API).

## GraphQL Playground 
You can check schema, docs or test some requests [here](https://schedule-graphql.herokuapp.com/)

## Endpoints
To make an API call you're able to use either of them:
 * `/`
 * `/graphql`

## Query Examples
```groovy
{
  teacherSchedule(teacher: "Козленко Микола Іванович", date_to: "09.04.2020") {
    teacher
    schedule {
      date
      day
      items {
        number
        time_bounds
        info
      }
    }
  }
  
  groupSchedule(group: "ІПЗ-41", date_to: "09.04.2020") {
    group
    schedule {
      date
      items {
        number
      }
    }
  }
  
  groups(query: "ІПЗ")
  
  teachers(query: "Козич")
  
  college: faculties(query: "Коледж") {
    name
  }
  
  mif: faculties(code: 1002) {
    name
  }
}
```


## How to run locally
1. Clone the project:
    ```bash
    git clone git@github.com:thestd/schedule-graphql.git
    cd schedule-graphql
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the application
    ```bash
    npm start
    ```
   or
    ```
    npm start:dev
    ```

3. Server should be ready at `localhost:3000`
