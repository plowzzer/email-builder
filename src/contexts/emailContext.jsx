import { createContext, useContext, useReducer } from "react"
import emailBuilderReducer from "./emailReducer"
import { ViewContext } from "./viewContext"

const initialState = {
  blocks: [],
}

const EmailBuilderContext = createContext(null)

const useEmailBuilderContext = () => useContext(EmailBuilderContext)

const EmailBuilderProvider = ({ children }) => {
  const { mainSelected } = useContext(ViewContext)
  const [state, dispatch] = useReducer(emailBuilderReducer, initialState)



  return (
    <EmailBuilderContext.Provider value={{
      blocks: state.blocks,
      ui: state.ui,
      html: state.html,
      state,
      dispatch,
    }}>
      {children}
    </EmailBuilderContext.Provider>
  )
}

export { EmailBuilderContext, EmailBuilderProvider, useEmailBuilderContext }
