const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  userName: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  bodyweight: {type: Number},
  isMetric: {type: Boolean, default: false},
  exercises: [
    {
      name: {String, unique: true},
      isTimed: {type: Boolean},
      personalRecords: [
        {
          repCount: {type: Number, unique: true},
          amount: {type: Number}
        }
      ]
    }
  ],
  workouts: [
    {
      date: {type: Date, required: true},
      bodyweightToday: {type: Number},
      exercisesToday: [
        {
          exerciseId: {type: Number},
          workoutId: {type: Number},
          weight: {type: Number},
          reps: {type: Number},
          sets: {type: Number},
          time: {type: Number, default: null},
          restTime: {type: Number, default: null}
        }
      ]
    }
  ]
})

module.exports = userSchema