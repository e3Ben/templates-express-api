import {Router} from 'express'


const router = Router()

router.get('/', (req, res) => {
    return res.json({message: 'get user'})
})

router.get('/about', (req, res) => {
    return res.json({message: 'about user'})
})

export {
    router as default
}
