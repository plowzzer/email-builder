import { useEmailBuilderContext } from "@/contexts/emailContext";

const Preview = () => {
  const { html } = useEmailBuilderContext()

  return (
    <div className="flex h-full w-full items-center justify-center">
      <iframe
        srcDoc={html}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Preview;