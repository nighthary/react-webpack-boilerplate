import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import middlewares from './middlewares'
// import { persistState } from 'redux-devtools'
// import DevTools from 'components/DevTools'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(middlewares)
// const enhancer = compose(
//   middlewares,
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&#]+)\b/
//     )
//   )
// )

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
