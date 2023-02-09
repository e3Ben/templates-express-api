import express, {Router} from 'express'
import configureRouter from './configureRouter'

const port = 8080

const main = (args:string[]) => {
    const server = express()
    const router = Router()
    const routes = configureRouter(router)

    express.json()
    server.use(routes)

    server.listen(port, () => {
        console.log(`Listening on port ${port}...`)
    })
}

export {
    main as default
}
