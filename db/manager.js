import { request, response } from 'express'
import pg from 'pg'
import { pool } from './index.js'

export const createManager = async (request, response) => {
    const {name} = request.body
    pool.query("INSERT INTO manager(name) VALUES($1) ", [name], (error, results) => {
            if (error) {
                response.status(409).send('Manager already exists')
            }
            else
                response.status(201).send('Manager succesfully added')
        }
    )
}