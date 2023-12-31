import { Router } from 'express';
import ProductController from '../controllers/ProductController.js';

const router = new Router();

router.get('/:id', ProductController.getOne);
router.get('/', ProductController.getAll);
router.post('/', ProductController.create);

export default router;
