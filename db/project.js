import { request, response } from 'express'
import pg from 'pg'
import { pool } from './index.js'

export const getProject = (request, response) => {
    pool.query('SELECT * FROM project', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

export const getProjectById = (request, response) => {
    const id = request.params.id

    pool.query("SELECT * FROM project WHERE id = $1", [id], (error, results) => {
        if (results.rows.length == 0) {
            response.status(404).send('Project not found')
        }
        else {
            response.status(200).json(results.rows)
        }
    })
}

export const createProject = async (request, response) => {
    const {name, code, manager_id, budget} = request.body

    pool.query("INSERT INTO project(name, code, manager_id, budget) VALUES($1, $2, $3, $4) ", [name, code, manager_id, budget], (error, results) => {
        if (error) {
            response.status(409).send('Project already exists')
        }
        else
            response.status(201).send('Project succesfully created')
    })
}

export const deleteProjectById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query("DELETE FROM project WHERE id = $1", [id], (error, results) => {
        
        if (error) {
            response.status(404).send('Project not found')
        }
        else {
            response.status(204).send(`Project deleted with ID: ${id}`)
        }
    })

}

export const updateProjectById = (request, response) => {
    const id = parseInt(request.params.id)
    const {name, code, manager_id, budget} = request.body

    pool.query("UPDATE project SET name = $1, code = $2, manager_id = $3, budget = $4 WHERE id = $5", [name, code, manager_id, budget, id], (error, results) => {
        if (error) {
            response.status(404).send('Project not found')
        }
        else {
            response.status(200).send(`Project modified with ID: ${id}`)
        }
    })

}
