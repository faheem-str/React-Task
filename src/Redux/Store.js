// import { configureStore } from '@reduxjs/toolkit'
// import Reducers from './Reducers' // Ensure you have a dataReducer in the reducers directory

// const store = configureStore({
//   reducer: {
//     data: Reducers,
//   },
//   // You can add middleware here if needed
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
// })

// export default store
// redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import Reducers from './Reducers' // Ensure you have a dataReducer in the reducers directory

// Initial state for the custom reducer
const initialState = {
  sidebarShow: true,
  theme: 'light',
}

// Custom reducer (from the first store)
const changeState = (state = initialState, action) => {
  switch (action.type) {
    case 'set':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Combine reducers
const rootReducer = combineReducers({
  data: Reducers,
  custom: changeState, // Using 'custom' as a namespace for the custom reducer state
})

// Create the store using configureStore
const store = configureStore({
  reducer: rootReducer,
  // You can add middleware here if needed
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
})

export default store
