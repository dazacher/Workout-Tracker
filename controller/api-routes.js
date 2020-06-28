const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {

        if (error) {
            console.log(error);
            res.send(error);

        }
        console.log(data);
        res.json(data);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}, (error, data) => {

        if (error) {
            console.log(error);
            res.send(error);

        }
        console.log(data);
        res.json(data);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    db.Workout.update({ _id: req.params.id }, {
        $push: {
            exercises: req.body
        }
    },
        { new: true },
        (error, data) => {

            if (error) {
                console.log(error);
                res.send(error);

            }
            console.log(data);
            res.json(data);
        });
});
module.exports = router;