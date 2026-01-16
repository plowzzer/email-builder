import { Braces, Download, FileCode, Monitor, Pencil, ScanEye, Smartphone, Upload } from "lucide-react"
import { useContext } from "react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { ViewContext } from "@/contexts/viewContext"



const Header = () => {
  const { mainSelected, viewSelected, changeView, changeMain } = useContext(ViewContext)

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <h1 className="font-bold">Email Builder</h1>
      <ButtonGroup className="ml-2">
        <Button variant="outline" selected={mainSelected === 'edit'} size="icon" aria-label="Edit" onClick={() => changeMain('edit')}>
          <Pencil />
        </Button>
        <Button variant="outline" selected={mainSelected === 'preview'} size="icon" aria-label="Preview" onClick={() => changeMain('preview')}>
          <ScanEye />
        </Button>
        <Button variant="outline" selected={mainSelected === 'code'} size="icon" aria-label="Code" onClick={() => changeMain('code')}>
          <FileCode />
        </Button>
        <Button variant="outline" selected={mainSelected === 'json'} size="icon" aria-label="JSON" onClick={() => changeMain('json')}>
          <Braces />
        </Button>
      </ButtonGroup>
      <div className="ml-auto flex">
        <Button variant="ghost" size="icon" aria-label="Download">
          <Download />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Upload">
          <Upload />
        </Button>
        <ButtonGroup className="ml-2">
          <Button variant="outline" selected={viewSelected === 'desktop'} size="icon" aria-label="Desktop" onClick={() => changeView('desktop')}>
            <Monitor />
          </Button>
          <Button variant="outline" selected={viewSelected === 'mobile'} size="icon" aria-label="Mobile" onClick={() => changeView('mobile')}>
            <Smartphone />
          </Button>
        </ButtonGroup>
      </div>
    </header>
  )
}

export default Header