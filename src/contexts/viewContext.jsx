import { createContext, useContext, useState } from "react"

const ViewContext = createContext({})

const useViewContext = () => useContext(ViewContext)

const ViewProvider = ({ children }) => {
  const [viewSelected, setViewSelected] = useState('desktop')
  const [mainSelected, setMainSelected] = useState('edit')

  const changeView = (view) => {
    switch (view) {
      case 'desktop':
        setViewSelected('desktop')
        break
      case 'mobile':
        setViewSelected('mobile')
        break
      default:
        console.error('Invalid view selected')
    }
  }

  const changeMain = (main) => {
    switch (main) {
      case 'edit':
        setMainSelected('edit')
        break
      case 'preview':
        setMainSelected('preview')
        break
      case 'code':
        setMainSelected('code')
        break
      case 'json':
        setMainSelected('json')
        break
      default:
        console.error('Invalid main selected')
    }
  }


  return (
    <ViewContext.Provider value={{
      viewSelected,
      mainSelected,
      changeMain,
      changeView
    }}>
      {children}
    </ViewContext.Provider>
  )
}

export { useViewContext, ViewContext, ViewProvider }
