const { promisify } = require('util');
const UserClient = require('../services/userMicroservices');

class UserController {
  async show(req, res) {
    const { id } = req.params;

    const response = await new Promise((resolve, reject) => {
      UserClient.getUserById({ id }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    });

    return res.json(response);
  }

  async store(req, res) {
    const { email, username, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      UserClient.registerUser({
        user: { email, username, password }
      }, function (err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    })

    console.log(response);


    return res.json(response);
  }
}

module.exports = new UserController();