import express from 'express'
import { param, body } from 'express-validator'
import {
  createNewArticle,
  deleteArticle,
  fetchAllArticles,
  fetchArticle,
  updateArticle,
} from '../controllers/articles.controller.js'

const articleValidator = [
  body('title').notEmpty(),
  body('content').notEmpty(),
  body('published').isBoolean().optional(),
]

const router = express.Router()

router.get('/', fetchAllArticles)
router.post('/', articleValidator, createNewArticle)
router.get('/:id', param('id').isInt(), fetchArticle)
router.put('/:id', param('id').isInt(), articleValidator, updateArticle)
router.delete('/:id', param('id').isInt(), deleteArticle)

export default router
