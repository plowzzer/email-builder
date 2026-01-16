
import Sidebar from "@/Attributes/Sidebar"
import Header from "@/components/Header"

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <main className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex-1">
          {children}
        </div>
      </main>
      <Sidebar />
    </div>
  )
}

export default Layout