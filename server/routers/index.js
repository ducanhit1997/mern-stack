const userRouter = require('./user')

const initRoutes = (app) => {
  app.use('/api/auth', userRouter)
}

module.exports = initRoutes