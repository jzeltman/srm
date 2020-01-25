import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "Reducers/_index";

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);