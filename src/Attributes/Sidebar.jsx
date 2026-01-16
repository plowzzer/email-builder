import { EmailBuilderContext } from "@/contexts/emailContext";
import { useContext } from "react";
import TextAttributes from "./TextAttributes";

const Sidebar = (props) => {
  const { ui, dispatch } = useContext(EmailBuilderContext);

  return (
    <div className="flex flex-col gap-2 w-[400px] bg-gray-100 border-l p-4 shrink-0">
      <h2 className="font-bold text-lg">Attributes</h2>
      {JSON.stringify(ui)}
      {ui?.selectedBlockType === 'text' && <TextAttributes />}
    </div>
  )
}

export default Sidebar