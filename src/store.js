import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./slice/rootSlice"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()
const initialState={}

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
    preloadedState: initialState,
})

sagaMiddleware.run(rootSaga)

export default store;