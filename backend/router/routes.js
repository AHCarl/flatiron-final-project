const UserController = require('../controllers/userController');
const Authentication = require('../controllers/authentication');

const passport = require('../services/passport');

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignIn = passport.authenticate('local', {session: false})

module.exports = (app) => {
  app.post('api/user/signup', Authentication.signup)
  app.post('api/user/signin', requireSignIn, Authentication.signin)

  app.get('/api/test', requireAuth, (req, res) => {
    res.send({msg: 'This is behind authentication'})
  })
  app.get('/api/users', UserController.readAll)
  app.get('/api/user', UserController.readMe)
}