// @ts-nocheck
import { useReducer } from "react"
import { initialState, AppContext } from "./AppContext"
import { AppReducer } from "./AppReducer"

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setTheme = (theme) => {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    })
  }

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    })
  }

  const store = {
    ...state,
    setTheme,
    setUser,
  }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export default AppContextProvider
