const PurchaseMicroserviceService = require('../services/userMicroservices');

class PurchaseController {
  async index(req, res) {
    const { id } = req.params;

    return res.json({ ok: true });
  }

  async show(req, res) {
    const { id: userId } = req.params;

    return res.json({ ok: true });
  }

  async store(req, res) {

    return res.json({ ok: true });
  }
}

module.exports = new PurchaseController();