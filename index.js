import express, { request, response } from 'express'
import projectRouter from './routes/projectRouter.js'
import managerRouter from './routes/managerRouter.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use('/project', projectRouter)
app.use('/manager', managerRouter)

app.get("/", (request, response) => {
    response.json({ info: `Great!`})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})
