const Purchase = require('./models/Purchase');

module.exports = {
  async getPurchaseById(call, callback) {
    const { id } = call.request;

    const purchase = await Purchase.findOne(id);

    return callback(null, { purchase: { ...purchase.toObject(), id: purchase._id } })

  },
  async listPurchases(call, callback) {
    const { userId } = call.request;

    const purchases = await Purchase.find({ userId });

    return callback(null, { purchases })

  },
  async purchase(call, callback) {
    const { userId, title, value } = call.request;

    const purchase = await Purchase.create({ title, value, userid });

    return callback(null, { purchase: { ...purchase.toObject(), id: purchase._id } })
  },
};