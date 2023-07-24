import express from 'express';
import {addtask,gettasks,gettaskById,edittask,deletetask} from '../controller/user-controller.js';
//gettaskById, edittask, deletetask ,ettasks
const router = express.Router();

router.get('/', gettasks);
router.post('/add', addtask);
router.get('/:id', gettaskById);
router.put('/:id', edittask);
router.delete('/:id', deletetask);

export default router;