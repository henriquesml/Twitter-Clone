import { Router } from 'express'

import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController'
import TweetController from './app/controllers/TweetController.js'
import LikeController from './app/controllers/LikeController.js'
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UserController.create)
routes.post('/sessions', SessionController.create)

// Middleware Global
routes.use(authMiddleware)

routes.post('/tweets', TweetController.create)
routes.get('/tweets', TweetController.index)
routes.post('/likes/:id', LikeController.create)

export default routes
