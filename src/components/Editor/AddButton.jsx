import { BetweenHorizonalStart, Columns3, Image, Minus, Plus, SquarePlus, TextAlignStart } from "lucide-react";
import { useContext } from "react";

import { EmailBuilderContext } from "@/contexts/emailContext";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const AddButton = () => {
  const { dispatch } = useContext(EmailBuilderContext);

  const action = {
    addTextBlock: () => {
      dispatch({
        type: 'ADD_BLOCK',
        block: {
          id: crypto.randomUUID(),
          type: 'text',
          attributes: {},
          content: 'Novo texto',
        },
      })
    },

    addImageBlock: () => {
      dispatch({
        type: 'ADD_BLOCK',
        block: {
          id: crypto.randomUUID(),
          type: 'image',
          attributes: {
            src: 'https://placehold.co/600x400',
            alt: '',
          },
        },
      })
    },

    addButtonBlock: () => {
      dispatch({
        type: 'ADD_BLOCK',
        block: {
          id: crypto.randomUUID(),
          type: 'button',
          attributes: {
            label: 'Clique aqui',
            href: '#',
          }
        },
      })
    }
  }

  return (
    <div className="mt-4 flex justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Add" className="bg-blue-600">
            <Plus className="text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-2 grid-cols-3">
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" onClick={action.addTextBlock}>
              <TextAlignStart className="h-6 w-6" />
              <span className="text-sm">Texto</span>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" onClick={action.addButtonBlock}>
              <SquarePlus className="h-6 w-6" />
              <span className="text-sm">Botão</span>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" onClick={action.addImageBlock}>
              <Image className="h-6 w-6" />
              <span className="text-sm">Image</span>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" disabled>
              <Minus className="h-6 w-6" />
              <span className="text-sm">Divisão</span>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" disabled>
              <BetweenHorizonalStart className="h-6 w-6" />
              <span className="text-sm">Espaço</span>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" disabled>
              <Columns3 className="h-6 w-6" />
              <span className="text-sm">Coluna</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AddButton;