const express = require('express');
const ccontController = require ('../controllers/ccontController.js');
const router = express.Router();

router.post('/ccont', ccontController.Insert);
router.delete('/ccont/id', ccontController.Delete);
router.get('/ccont', ccontController.Selectall);
router.get('/ccont/:id', ccontController.SelectDetail);
router.get('/ccont/:id', ccontController.Update);

module.exports = router;
