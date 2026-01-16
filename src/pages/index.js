import { useContext } from "react";

import Code from "@/components/Code";
import Edit from "@/components/Editor/Edit";
import Json from "@/components/Json";
import Preview from "@/components/Preview";
import { ViewContext } from "@/contexts/viewContext";
import Layout from "@/Template/layout";

export default function Home() {
  const { mainSelected } = useContext(ViewContext)

  return (
    <Layout>
      {mainSelected === 'edit' && (<Edit />)}
      {mainSelected === 'preview' && (<Preview />)}
      {mainSelected === 'code' && (<Code />)}
      {mainSelected === 'json' && (<Json />)}
    </Layout>
  );
}
