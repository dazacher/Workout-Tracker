const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:
        {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                exerciseType: String,
                name: String,
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {

    const totalDuration = this.exercises.reduce((count, exercise) => {
        // Copy the object being iterated over
        console.log(exercise.duration);
        return count + exercise.duration
    }, 0);
    console.log("Outside " + totalDuration);
    return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;