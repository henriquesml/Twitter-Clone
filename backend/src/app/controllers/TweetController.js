import * as Yup from 'yup'
import Tweet from '../models/Tweet'
import User from '../models/User'

class TweetController {
  async index(req, res) {

    const tweets = await Tweet.findAll({
      order: [ ['createdAt', 'DESC'] ],
      include: [
        { model: User,
          as: 'user',
          attributes: ['name']
        }
      ]
    })

    return res.json(tweets)

  }

  async create(req, res) {

    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      content: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json( { error: 'Campos obrigatórios não foram preenchidos.' } )
    }

    const tweet = await Tweet.create(req.body)

    req.io.emit('tweet', tweet)

    return res.status(201).json(tweet)

  }
}

export default new TweetController