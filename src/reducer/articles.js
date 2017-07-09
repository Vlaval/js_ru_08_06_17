import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

const defaultArticlesObj = defaultArticles.reduce((acc, articleObj) => {
    acc[articleObj.id] = articleObj;
    return acc;
}, {})

export default (articleState = defaultArticlesObj, action) => {
    const {type, payload} = action

    switch (type) {
      case DELETE_ARTICLE:
        const articleListCopy = Object.assign({}, articleState);
        delete articleListCopy[payload.id]

        return articleListCopy
    }

    return articleState
}