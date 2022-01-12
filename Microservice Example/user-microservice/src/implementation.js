const User = require('./models/User');

module.exports = {
  async getUserById(call, callback) {
    console.log('getUserById', call.request);
    const { id } = call.request;

    //consultar banco de dados e retornar
    const user = await User.findById(id);

    if (!user) {
      return callback({ error: 'user not found' });
    }


    return callback(null, { user: { ...user.toObject(), id: user._id.toString(), password: undefined } });
  },

  async registerUser(call, callback) {
    const { email, username, password } = call.request.user;

    //registrar no banco e retornar usiario com id
    const user = await User.create({ email, username, password });

    callback(null, { user: { ...user.toObject(), id: user._id.toString() } });
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user;

    const user = await User.findOne({ email })
    if (!user) {
      console.log('user not found');
      return callback({ error: 'User not found' })
    }
    console.log(user);

    if (!await user.compareHash(password)) {
      return callback({ error: 'Invalid password' })
    }

    return callback(null, { token: User.generateToken(user) })
  }
}