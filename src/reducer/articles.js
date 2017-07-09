import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const defaultArticlesObj = defaultArticles.reduce((acc, articleObj) => {
    acc[articleObj.id] = articleObj;
    return acc;
}, {})

export default (articleState = defaultArticlesObj, action) => {
    const {type, payload, newCommentId} = action

    switch (type) {
      case DELETE_ARTICLE:
        const articleListCopy = Object.assign({}, articleState);
        delete articleListCopy[payload.id]

        return articleListCopy

      case ADD_COMMENT:
        const article = articleState[payload.articleId]
        return {
          ...articleState,
          [payload.articleId]: {
            ...article,
            comments: (article.comments || []).concat(newCommentId)
          }
        }
    }

    return articleState
}