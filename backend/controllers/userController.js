const User = require('../models/User.js')

exports.readAll = (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(users)
    }
  })
}

exports.readMe = (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(user)
    }
  })
}

exports.addWorkout = (req, res, next) => {
  User.findOneAndUpdate({email: req.body.email}, {workouts: req.body.workout}, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        user.workouts.push(myWorkout)
        user.save()
        res.status(200).json(user)
      }
    })
}