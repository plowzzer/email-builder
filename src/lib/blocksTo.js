export const blocksToMjmlAst = (blocks) => ({
  tagName: 'mjml',
  attributes: {},
  children: [
    {
      tagName: 'mj-body',
      attributes: {
        'background-color': '#ffffff',
      },
      children: blocks.map(blockToMjmlNode),
    },
  ],
})

export const blockToMjmlNode = (block) => {
  switch (block.type) {
    case 'text':
      return {
        tagName: 'mj-section',
        children: [
          {
            tagName: 'mj-column',
            children: [
              {
                tagName: 'mj-text',
                attributes: block.attributes,
                content: block.content,
              },
            ],
          },
        ],
      }

    case 'image':
      return {
        tagName: 'mj-section',
        children: [
          {
            tagName: 'mj-column',
            children: [
              {
                tagName: 'mj-image',
                attributes: block.attributes,
              },
            ],
          },
        ],
      }

    case 'button':
      return {
        tagName: 'mj-section',
        children: [
          {
            tagName: 'mj-column',
            children: [
              {
                tagName: 'mj-button',
                attributes: block.attributes,
              },
            ],
          },
        ],
      }

    default:
      return null
  }
}
