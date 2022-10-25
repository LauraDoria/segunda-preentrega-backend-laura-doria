const Passport = require('passport')
const { Router } = require('express')

const loginRouter = Router()

const Logger = require('../utils/logger')

//Rutas
loginRouter.get('/login', (req, res) => {
    res.render('login')
    Logger.Logger.LoggerInfo.info('GET /loginrequest ' + new Date().toLocaleTimeString())
})
loginRouter.post('/login', Passport.authenticate('local', {failureRedirect: 'login-error'}), (req, res) => {
    res.redirect('/user')
    Logger.Logger.LoggerInfo.info('POST /login request ' + new Date().toLocaleTimeString())
})

export default loginRouter