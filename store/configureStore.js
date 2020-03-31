import {createStore, applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './modules'
 

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(preloadedState, {isServer, req = null}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    preloadedState,
    bindMiddleware([sagaMiddleware])
  )
  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  return store
}
 
export default configureStore