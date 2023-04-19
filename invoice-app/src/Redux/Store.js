
import rootreducers from "./Reducer/RootReducer";

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    rootreducers
})