const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PurchaseController = require('./controllers/PurchaseController');

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.get('/users/:id/purchases', UserPurchaseController.show);
router.post('/sessions', SessionController.store);

router.get('/purchases/:id', PurchaseController.show);

router.post('/purchases', PurchaseController.store);



module.exports = router;