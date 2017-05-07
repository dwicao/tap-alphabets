import { createStore, applyMiddleware } from 'redux';
import rootReducer from '@src/reducers';
// import createLogger from 'redux-logger';

// const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      // loggerMiddleware
    )
  )
}
