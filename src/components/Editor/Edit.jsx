import { useContext } from "react";

import { EmailBuilderContext } from "@/contexts/emailContext";
import { ViewContext } from "@/contexts/viewContext";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import AddButton from "./AddButton";
import EditorRenderer from "./EditorRender";

const Edit = () => {
  const { viewSelected } = useContext(ViewContext)
  const { ui, blocks, dispatch } = useContext(EmailBuilderContext);

  const action = {
    moveBlock: (from, to) => dispatch({
      type: 'REORDER_BLOCKS',
      from,
      to,
    }),
    removeBlock: (e, id) => {
      e.stopPropagation();
      dispatch({
        type: 'REMOVE_BLOCK',
        id,
      })
    },
    selectBlock: (id, type) => {
      console.log('selecionando', id)
      dispatch({
        type: 'SELECT_BLOCK',
        payload: { id, type },
      })
    },
  }

  return (
    <div className="p-4 flex-1 bg-gray-200">
      <ul className={
        cn(
          viewSelected === 'mobile' ? 'w-[370px]' : 'w-[600px]',
          'mx-auto bg-white'
        )
      }>
        {blocks.map((block) => (
          <li
            key={block.id}
            onClick={() => action.selectBlock(block.id, block.type)}
            className={
              cn(
                'border relative border-transparent hover:border-blue-300',
                block.id === ui?.selectedBlockId && 'border-blue-700'
              )
            }
          >
            {/* TOOLS */}
            <div className={cn(
              "absolute left-[-50px] h-full flex-col justify-center gap-2 hidden",
              block.id === ui?.selectedBlockId && "flex"
            )}>
              <ButtonGroup
                orientation="vertical"
                aria-label="Media controls"
                className="h-fit"
              >
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    action.moveBlock(blocks.indexOf(block), Math.max(0, blocks.indexOf(block) - 1));
                  }}
                >
                  <ArrowUp />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    action.moveBlock(blocks.indexOf(block), Math.min(blocks.length - 1, blocks.indexOf(block) + 1));
                  }}
                >
                  <ArrowDown />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={(e) => {
                    action.removeBlock(e, block.id);
                  }}
                >
                  <Trash2 />
                </Button>
              </ButtonGroup>
            </div>

            {/* BODY */}
            <EditorRenderer node={block} />
          </li>
        ))}
      </ul>

      <AddButton />

    </div >
  )

};

export default Edit;