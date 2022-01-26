import express from 'express'
import get from './services/get'

const router = express.Router()

//http://localhost:3000/address/
router.get('/:cep', get)

export default router