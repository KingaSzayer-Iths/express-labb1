import express, { request, response } from 'express'
import { getProject, getProjectById, createProject, deleteProjectById, updateProjectById } from '../db/project.js';

const router = express.Router();

router.get('/', getProject)

router.post('/', createProject)

router.get('/:id', getProjectById)

router.put('/:id', updateProjectById) 

router.delete('/:id', deleteProjectById)


export default router;