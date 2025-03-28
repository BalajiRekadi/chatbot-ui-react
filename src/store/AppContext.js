import { createContext } from "react"

export const initialState = {
  theme: 0,
  user: {},
}

export const AppContext = createContext(initialState)
