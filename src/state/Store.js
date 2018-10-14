import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers'

const store = createStore(
    todoApp, 
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
)

export default store