import express from "express";
import indexCtrl from './controller/index.js';

const router = express.Router();

router.get('/', indexCtrl.home);
router.get('/test', indexCtrl.test);
router.put('/:name', indexCtrl.update);
router.post('/', indexCtrl.create);

export default router;
