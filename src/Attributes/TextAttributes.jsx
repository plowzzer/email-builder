import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { EmailBuilderContext } from "@/contexts/emailContext"
import { TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart } from "lucide-react"
import { useContext } from "react"

const TextAttributes = () => {
  const { blocks, ui, dispatch } = useContext(EmailBuilderContext);

  const { selectedBlockId } = ui;
  const blockDetail = blocks.find(b => b.id === selectedBlockId);

  const updateAttribute = (attribute, value) => {
    dispatch({
      type: 'UPDATE_BLOCK',
      id: selectedBlockId,
      payload: {
        [attribute]: value,
      },
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <pre>{JSON.stringify(blockDetail, null, 2)}</pre>
      <div>
        <p>Conteúdo</p>
        <Textarea
          rows={5}
          value={blockDetail?.content}
          onChange={(e) => updateAttribute('content', e.target.value)} />
      </div>

      <div>
        <p>Alinhamento</p>
        <ButtonGroup>
          <Button
            variant="outline"
            selected={blockDetail?.align === 'left'}
            size="icon"
            onClick={() => updateAttribute('align', 'left')}
          >
            <TextAlignStart />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.align === 'center'}
            size="icon"
            onClick={() => updateAttribute('align', 'center')}
          >
            <TextAlignCenter />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.align === 'right'}
            size="icon"
            onClick={() => updateAttribute('align', 'right')}
          >
            <TextAlignEnd />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.align === 'justify'}
            size="icon"
            onClick={() => updateAttribute('align', 'justify')}
          >
            <TextAlignJustify />
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <p>Cor do texto</p>
        <div className="flex gap-2 items-center">
          <Input type="color" className="w-[60px]" value={blockDetail?.color} onChange={(e) => updateAttribute('color', e.target.value)} />
          <Input type="text" value={blockDetail?.color} onChange={(e) => updateAttribute('color', e.target.value)} />
        </div>
      </div>

      <div>
        <p>Tamanho da fonte (px)</p>
        <InputGroup>
          <InputGroupInput
            placeholder="16"
            type="number"
            value={`${blockDetail?.fontSize?.replace('px', '') || 16}`}
            onChange={(e) => updateAttribute('fontSize', `${e.target.value}px`)}
          />
          <InputGroupAddon align="inline-end">
            <span>px</span>
          </InputGroupAddon>
        </InputGroup>
      </div>


    </div>
  )
}

export default TextAttributes