import Sequelize, { Model } from 'sequelize'

class Tweet extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
        likes: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    )
    return this
    
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Tweet
