import {DELETE_ARTICLE, INCREMENT, DATE_RANGE, SELECT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeSelection(selectedArr) {
  return {
    type: SELECT,
    payload: { selectedArr }
  }
}

export function changeDateRange(range) {
  return {
    type: DATE_RANGE,
    payload: { range }
  }
}