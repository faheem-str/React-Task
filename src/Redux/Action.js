// redux/actions.js
import { setData } from './Reducers'

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch('https://66a4d7315dc27a3c1909f3a3.mockapi.io/b2bcert/userInfo/1')
    const data = await response.json()
    dispatch(setData(data))
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
