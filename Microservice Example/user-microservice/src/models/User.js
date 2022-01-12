const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: String,
  username: String,
  password: String
});

UserSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) next();
  this.password = await hash(this.password, 8);
});


UserSchema.methods = {
  compareHash(hash) {
    return compare(hash, this.password);
  }
}

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, "1234asd", {
      expiresIn: '7d'
    })
  }
}

module.exports = model('User', UserSchema);