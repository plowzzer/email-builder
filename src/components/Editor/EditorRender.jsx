export const mapTextStyles = (attributes = {}) => {
  if (!attributes) return {}

  return {
    fontSize: attributes['font-size'],
    color: attributes.color,
    fontFamily: attributes['font-family'],
    fontWeight: attributes['font-weight'],
    lineHeight: attributes['line-height'],
    textAlign: attributes['align'],
    padding: attributes.padding,
  }
}

const EditorRenderer = ({ node }) => {
  console.log(node)
  switch (node.type) {
    case 'mj-section':
      return (
        <div className="editor-section">
          {node.children?.map(child => (
            <EditorRenderer key={child.id} node={child} />
          ))}
        </div>
      )

    case 'mj-column':
      return (
        <div className="editor-column">
          {node.children?.map(child => (
            <EditorRenderer key={child.id} node={child} />
          ))}
        </div>
      )

    case 'text':
      return (
        <div style={mapTextStyles(node.attributes)}>
          {node.content}
        </div>
      )

    case 'image':
      return (
        <div style={mapTextStyles(node.attributes)}>
          <img
            src={node.attributes.src}
            alt={node.attributes.alt || ''}
          />
        </div>
      )

    default:
      return null
  }
}


export default EditorRenderer