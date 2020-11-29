import express from 'express'
import testUserApi from '../../../controllers/user/testUser'

const router = express.Router()

router.get("", testUserApi)

export default router