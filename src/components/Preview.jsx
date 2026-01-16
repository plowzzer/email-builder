import { EmailBuilderContext } from "@/contexts/emailContext";
import { ViewContext } from "@/contexts/viewContext";
import { blocksToMjmlAst } from "@/lib/blocksTo";
import { useContext, useEffect, useMemo } from "react";

const Preview = () => {
  const { viewSelected } = useContext(ViewContext)
  const { state, html, dispatch } = useContext(EmailBuilderContext)

  const mjmlAst = useMemo(() => {
    if (!state.blocks.length) return null
    return blocksToMjmlAst(state.blocks)
  }, [state.blocks])

  useEffect(() => {
    // if (mainSelected !== 'preview') return
    if (!mjmlAst) return

    let cancelled = false

    const renderEmail = async () => {
      dispatch({ type: 'RENDER_START' })

      try {
        const res = await fetch('/api/render-html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mjmlAst }),
        })

        const data = await res.json()

        if (!cancelled) {
          dispatch({
            type: 'RENDER_SUCCESS',
            html: data.html,
          })
        }
      } catch {
        if (!cancelled) {
          dispatch({
            type: 'RENDER_ERROR',
            html: 'Error',
          })
        }
      }
    }

    renderEmail()

    return () => {
      cancelled = true
    }
  }, [mjmlAst])

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-500">
      <iframe
        srcDoc={html}
        title="Email Preview"
        width={viewSelected === 'desktop' ? '600px' : '370px'}
        height={800}
      />
    </div>
  );
};

export default Preview;