import { EmailBuilderContext } from "@/contexts/emailContext";
import { useContext } from "react";
import ImageAttributes from "./ImageAttributes";
import TextAttributes from "./TextAttributes";

const Sidebar = (props) => {
  const { ui } = useContext(EmailBuilderContext);

  return (
    <>
      {ui?.selectedBlockId &&

        <div className="flex flex-col gap-2 w-[400px] bg-gray-100 border-l p-4 shrink-0">
          <h2 className="font-bold text-lg">Atributos</h2>

          {ui?.selectedBlockType === 'text' && <TextAttributes />}
          {ui?.selectedBlockType === 'image' && <ImageAttributes />}
        </div>
      }
    </>
  )
}

export default Sidebar