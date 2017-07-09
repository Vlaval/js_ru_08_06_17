export default store => next => action => {
  console.log('---', 'state before: ', store.getState())
  console.log('---', 'dispatching', action)
  if (action.createId) {
    const randomId = Math.random().toString(32).substring(3)
    action.newCommentId = randomId
  }
  next(action)
  console.log('---', 'state after: ', store.getState())
}