import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from "./app"
import ingredientsReducer from './ingredients'
import constructorReducer from './construtor'
import orderReducer from './order'
import authReducer from './auth'

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    order: orderReducer
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
