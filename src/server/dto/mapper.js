toGroupScheduleDto = (data) => ({
    group: data.group,
    schedule: buildSchedule(data),
})

toTeacherScheduleDto = (data) => ({
    teacher: data.teacher,
    schedule: buildSchedule(data),
})

buildSchedule = (data) => {
    return data.schedule.map(x => ({
        date: x.date,
        day: x.day,
        items: x.items.map(x => ({
            number: x.number,
            timeBounds: x.time_bounds,
            info: x.info,
        })),
    }));
}

module.exports = {
    toGroupScheduleDto,
    toTeacherScheduleDto
}
