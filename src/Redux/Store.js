import { configureStore, combineReducers } from '@reduxjs/toolkit'
import Reducers from './Reducers'

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, action) => {
  switch (action.type) {
    case 'set':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data: Reducers,
  custom: changeState,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
