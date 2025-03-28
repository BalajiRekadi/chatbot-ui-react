export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
