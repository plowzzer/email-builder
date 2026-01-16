import { useContext } from "react";

import { EmailBuilderContext } from "@/contexts/emailContext";
import AddButton from "./AddButton";



const Edit = () => {
  const { blocks, dispatch } = useContext(EmailBuilderContext);

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

  function updateBlock(id, payload) {
    dispatch({
      type: 'UPDATE_BLOCK',
      id,
      payload,
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

      <ul>
        {blocks.map((block) => (
          <li
            key={block.id}
            className="mb-4 p-4 border rounded"
            onClick={() => selectBlock(block.id, block.type)}
          >
            <pre>{JSON.stringify(block, null, 2)}</pre>
          </li>
        ))}
      </ul>

      <AddButton />
    </div >
  )

};

export default Edit;