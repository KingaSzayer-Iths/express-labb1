import express, { request, response } from 'express'
import { createManager } from '../db/manager.js';

const router = express.Router();

router.post('/', createManager)


export default router;