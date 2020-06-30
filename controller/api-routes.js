// const express = require("express");
const Workout = require("../models/Workout")
// const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.find({});

        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
        const data = await Workout.create({});

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json(data);
    }

});

router.put("/api/workouts/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {

        const data = await Workout.findByIdAndUpdate({ _id: req.params.id },
            { $push: { exercises: req.body } }, { new: true });


        res.json(data);
    } catch (error) {
        console.log(error);

        res.send(error);
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find({});

        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

module.exports = router;