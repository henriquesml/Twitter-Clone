import * as Yup from 'yup'
import Tweet from '../models/Tweet'

class LikeController {

  async create(req, res) {
    const id = req.params.id
    const tweet = await Tweet.findByPk(id)

    tweet.update({likes: tweet.likes + 1})

    await tweet.save()

    req.io.emit('like', tweet)
    
    return res.json(tweet)

  }
}

export default new LikeController