const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises:
        [{
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }]
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;