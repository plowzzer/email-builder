import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { EmailBuilderContext } from "@/contexts/emailContext"
import { TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart } from "lucide-react"
import { useContext } from "react"

const ImageAttributes = () => {
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

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-semibold mb-1">Imagem</p>
        <Input
          value={blockDetail?.attributes?.src}
          onChange={(e) => updateAttribute('src', e.target.value)}
        />
      </div>

      <div>
        <p className="font-semibold mb-1">Imagem</p>
        <div className="flex items-center gap-2">
          <Input
            value={blockDetail?.attributes?.width}
            onChange={(e) => updateAttribute('width', e.target.value)}
          />
          X
          <Input
            value={blockDetail?.attributes?.height}
            onChange={(e) => updateAttribute('height', e.target.value)}
          />
        </div>
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




    </div>
  )
}

export default ImageAttributes