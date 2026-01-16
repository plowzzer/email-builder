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
        attributes: {
          ...blockDetail?.attributes,
          [attribute]: value,
        }
      },
    })
  }

  const updateContent = (value) => {
    dispatch({
      type: 'UPDATE_BLOCK',
      id: selectedBlockId,
      payload: {
        content: value,
        ...blockDetail?.attributes
      },
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-semibold mb-1">Conteúdo</p>
        <Textarea
          rows={5}
          value={blockDetail?.content}
          onChange={(e) => updateContent(e.target.value)}
          className="bg-white"
        />
      </div>

      <div>
        <p>Alinhamento</p>
        <ButtonGroup>
          <Button
            variant="outline"
            selected={blockDetail?.attributes?.align === 'left'}
            size="icon"
            onClick={() => updateAttribute('align', 'left')}
          >
            <TextAlignStart />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.attributes?.align === 'center'}
            size="icon"
            onClick={() => updateAttribute('align', 'center')}
          >
            <TextAlignCenter />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.attributes?.align === 'right'}
            size="icon"
            onClick={() => updateAttribute('align', 'right')}
          >
            <TextAlignEnd />
          </Button>
          <Button
            variant="outline"
            selected={blockDetail?.attributes?.align === 'justify'}
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
          <Input type="color" className="w-[60px]" value={blockDetail?.attributes?.color} onChange={(e) => updateAttribute('color', e.target.value)} />
          <Input type="text" value={blockDetail?.attributes?.color} onChange={(e) => updateAttribute('color', e.target.value)} />
        </div>
      </div>

      <div>
        <p>Tamanho da fonte (px)</p>
        <InputGroup>
          <InputGroupInput
            placeholder="16"
            type="number"
            value={`${blockDetail?.attributes?.['font-size']?.replace('px', '') || 16}`}
            onChange={(e) => updateAttribute('font-size', `${e.target.value}px`)}
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