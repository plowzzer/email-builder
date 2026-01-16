import { useContext } from "react";

import { EmailBuilderContext } from "@/contexts/emailContext";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import AddButton from "./AddButton";



const Edit = () => {
  const { ui, blocks, dispatch } = useContext(EmailBuilderContext);

  function moveBlock(from, to) {
    dispatch({
      type: 'REORDER_BLOCKS',
      from,
      to,
    })
  }

  function removeBlock(id) {
    dispatch({
      type: 'REMOVE_BLOCK',
      id,
    })
  }

  function selectBlock(id, type) {
    dispatch({
      type: 'SELECT_BLOCK',
      payload: { id, type },
    })
  }



  return (
    <div className="p-4 flex-1">
      {blocks.length === 0 && (
        <p>Nenhum bloco adicionado.</p>
      )}

      <ul className="w-[600px] mx-auto">
        {blocks.map((block) => (
          <li
            key={block.id}
            onClick={() => selectBlock(block.id, block.type)}
            className={
              cn(
                'mb-4 p-4 border rounded relative',
                block.id === ui?.selectedBlockId && 'border-blue-500'
              )
            }
          >
            <div className={cn(
              "absolute left-[-30px] h-full flex-col justify-center gap-2 hidden",
              block.id === ui?.selectedBlockId && "flex"
            )}>
              <Button
                size="icon"
                variant="outline"
                onClick={(e) => {
                  removeBlock(block.id);
                }}
              >
                <Trash2 />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={(e) => {
                  moveBlock(blocks.indexOf(block), Math.max(0, blocks.indexOf(block) - 1));
                }}
              >
                ↑
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={(e) => {
                  moveBlock(blocks.indexOf(block), Math.min(blocks.length - 1, blocks.indexOf(block) + 1));
                }}
              >
                ↓
              </Button>
            </div>
            <pre>{JSON.stringify(block, null, 2)}</pre>

          </li>
        ))}
      </ul>

      <AddButton />
    </div >
  )

};

export default Edit;