import { db } from './db.service.js'

export async function createArticle(article) {
  const newArticle = await db.article.create({
    data: {
      ...article,
    },
  })

  return newArticle
}

export async function getAllArticles() {
  const articles = await db.article.findMany()
  return articles
}

export async function getArticleById(id) {
  const article = await db.article.findFirst({
    where: {
      id: Number(id),
    },
  })
  return article
}

export async function deleteArticleById(id) {
  await db.article.delete({
    where: {
      id: Number(id),
    },
  })
}

export async function updateArticleById(id, article) {
  const updatedArticle = await db.article.update({
    data: {
      ...article,
    },
    where: {
      id: Number(id),
    },
  })
  return updatedArticle
}
