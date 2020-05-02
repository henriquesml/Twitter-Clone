import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import 'express-async-errors'
import cors from 'cors'
import youch from 'youch'
import routes from './routes'

import './database'

class App {
  constructor(){
    this.app = express()
    this.server = http.createServer(this.app);
    this.io = socketio(this.server);

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use((req, res, next) => {
      req.io = this.io
      return next()
    })
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }

  exceptionHandler() {
    this.app.use( async (error, req, res, next) => {
      const errors = await new youch(error, req).toJSON()
      return res.status(500).json(errors)
    })
  }
}

export default new App().server
