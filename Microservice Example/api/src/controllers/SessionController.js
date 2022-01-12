const { promisify } = require('util')
const UserMicroserviceService = require('../services/userMicroservices');

class SessionController {
  async store(req, res) {
    console.log(req.body);
    const { email, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      UserMicroserviceService.loginUser({ user: { email, password } }, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response)
        }
      });
    })

    return res.json(response);
  }
}

module.exports = new SessionController();