const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('../schemas/userSchema')

const User = mongoose.model('users', userSchema)

let roddyDate = new Date

User.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else if (users.length === 0) {
    const user1 = new User({
      email: 'roddytoddman@goog.com',
      userName: 'RAMROD',
      password: '1234',
      bodyweight: '88',
      isMetric: true,
      exercises: [ 
        {
          name: 'Squat',
          isTimed: false,
          personalRecords: [
            {
              repCount: 1,
              amount: 240,
              date: roddyDate
            },
            {
              repCount: 20,
              amount: 180,
              date: roddyDate
            }
          ]
        },
        {
          name: "Plank",
          isTimed: true,
          personalRecords: [
            {
              repCount: 160,
              amount: 88, 
              date: roddyDate
            }
          ]
        }
      ],
      workouts: [
        {
          date: roddyDate,
          bodyweightToday: 88,
          exercisesToday: [
            {
              exercise: 'Squat',
              data: [ 
                {
                  weight: 180,
                  reps: 20,
                  sets: 1
                },
                {
                  weight: 240,
                  reps: 1,
                  sets: 2
                }
              ] 
            },
            {
              exercise: 'Plank',
              data: [
                {
                  weight: 88, 
                  reps: 160,
                  sets: 3
                }
              ]
            }
          ]
        }
      ]
  })
    const user2 = new User({
      email: 'stromkuzewon@goog.com',
      username: 'StrummyQQ',
      password: '1234',
      bodyweight: 183,
      isMetric: false,
      exercises: [
        {
          name: 'Squat',
          isTimed: false,
          personalRecords: []
        },
        {
          name: 'Bench Press',
          isTimed: false,
          personalRecords: []
        },
        {
          name: 'Deadlift',
          isTimed: false,
          personalRecords: []
        },
        {
          name: 'Plank',
          isTimed: true,
          personalRecords: []
        }
      ]
    })
    user1.save()
    user2.save()
    console.log('Seeded DB with 2 new users.');
  }
})

module.exports = User