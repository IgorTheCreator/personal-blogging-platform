import { validationResult } from 'express-validator'
import {
  getAllArticles,
  getArticleById,
  createArticle,
  deleteArticleById,
  updateArticleById,
} from '../services/articles.service.js'

export async function fetchAllArticles(req, res) {
  try {
    const articles = await getAllArticles()
    return res.status(200).json({ data: articles })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: err.message })
  }
}

export async function fetchArticle(req, res) {
  const result = validationResult(req)
  if (result.isEmpty()) {
    try {
      const { id } = req.params
      const article = await getArticleById(id)
      if (article === null) {
        return res.status(404).json({ message: 'Not Found' })
      }
      return res.status(200).json(article)
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ error: err.message })
    }
  } else {
    return res.status(400).json({ error: result.array() })
  }
}

export async function createNewArticle(req, res) {
  const result = validationResult(req)
  if (result.isEmpty()) {
    try {
      const article = await createArticle(req.body)
      return res.status(201).json(article)
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ error: err.message })
    }
  } else {
    return res.status(400).json({ error: result.array() })
  }
}

export async function deleteArticle(req, res) {
  const result = validationResult(req)
  if (result.isEmpty()) {
    try {
      const { id } = req.params
      await deleteArticleById(id)
      return res.status(204).end()
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ error: err.message })
    }
  } else {
    return res.status(400).json({ error: result.array() })
  }
}

export async function updateArticle(req, res) {
  const result = validationResult(req)
  if (result.isEmpty()) {
    try {
      const { id } = req.params
      const updatedArticle = await updateArticleById(id, req.body)
      if (article === null) {
        return res.status(404).json({ message: 'Not Found' })
      }
      return res.status(200).json(updatedArticle)
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ error: err.message })
    }
  } else {
    return res.status(400).json({ error: result.array() })
  }
}
