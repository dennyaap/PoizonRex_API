import { Router } from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = new Router();

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.create);

export default router;
