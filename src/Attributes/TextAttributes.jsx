import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart } from "lucide-react"

const TextAttributes = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p>Conteúdo</p>
        <Textarea rows={5} />
      </div>

      <div>
        <p>Alinhamento</p>
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <TextAlignStart />
          </Button>
          <Button variant="outline" size="icon">
            <TextAlignCenter />
          </Button>
          <Button variant="outline" size="icon">
            <TextAlignEnd />
          </Button>
          <Button variant="outline" size="icon">
            <TextAlignJustify />
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <p>Cor do texto</p>
        <div className="flex gap-2 items-center">
          <Input type="color" className="w-[60px]" />
          <Input type="text" value="#000000" />
        </div>
      </div>


    </div>
  )
}

export default TextAttributes