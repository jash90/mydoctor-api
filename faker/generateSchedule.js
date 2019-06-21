var express = require('express');
var router = express.Router();
const { Doctor, Schedule } = require("../models");
const { LocalTime } = require('js-joda');
router.get('/', async (req, res, next) => {
    Doctor.findAll({
        include: [
            { model: Schedule }
        ],
        limit: 10
    }).then(doctors => {
        doctors.forEach(doc => {
            if (doc.schedules.length > 0) {

            } else {
                const countWorkDay = Math.random() * 5 + 1;
                const daysOfWeek = [];
                for (let i = 0; i < countWorkDay; i++) {

                    let dayOfWeek = -1;
                    while (dayOfWeek == -1 || daysOfWeek.includes(dayOfWeek)) {
                        dayOfWeek = Number((Math.random() * 5).toFixed(0));
                    }
                    daysOfWeek.push(dayOfWeek);

                    let hourOpen = Number((Math.random() * 10 + 8).toFixed(0));
                    const duration = Number(Math.random() * 6 + 2).toFixed(0);
                    let hourClose = Number(hourOpen) + Number(duration);
                    if (hourClose >= 23) {
                        hourClose = 22;
                    }
                    hourOpen += ':00:00';
                    hourClose += ':00:00';


                    Schedule.create({ doctorId: doc.id, dayOfWeek: dayOfWeek.toString(), hourOpen, hourClose }).then(schedule => {
                        console.log(schedule);
                    })

                }
            }
        });
    })

    await Schedule.findAll().then(schedules => {
        res.json(schedules);
    });
});

module.exports = router;