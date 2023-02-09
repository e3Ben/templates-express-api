import {Router} from 'express'
import userRoutes from './routes/userRoutes'


const configureRouter = (router:Router) => {
    router.get('/', (req, res) => {
        return res.json({message: 'hello world'})
    })
    router.use('/user', userRoutes)

    return router
}

export {
    configureRouter as default
}
