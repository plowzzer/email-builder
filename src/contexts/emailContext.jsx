// import mjml2html from "mjml"
import { createContext, useContext, useEffect, useReducer } from "react"
import emailBuilderReducer from "./emailReducer"

const initialState = {
  blocks: [],
}

const EmailBuilderContext = createContext(null)

const useEmailBuilderContext = () => useContext(EmailBuilderContext)

const EmailBuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(emailBuilderReducer, initialState)

  // const mjml = useMemo(() => mjml2html(state), [state])
  // const html = useMemo(() => mjml2html(state), [state])

  useEffect(() => {
    console.log('State changed:', state)
  }, [state])

  return (
    <EmailBuilderContext.Provider value={{
      blocks: state.blocks,
      ui: state.ui,
      dispatch,
    }}>
      {children}
    </EmailBuilderContext.Provider>
  )
}

export { EmailBuilderContext, EmailBuilderProvider, useEmailBuilderContext }
