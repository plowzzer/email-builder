export const blocksToMjmlAst = (blocks) => ({
  tagName: 'mjml',
  attributes: {},
  children: [
    {
      tagName: 'mj-head',
      children: [
        {
          tagName: 'mj-attributes',
          children: [
            {
              tagName: 'mj-all',
              attributes: {
                'font-family': 'Arial, sans-serif',
              },
            },
            {
              tagName: 'mj-text',
              attributes: {
                'font-size': '16px',
                'padding': '0px',
                'line-height': '24px',
              },
            }
          ],
        },
      ],
    },
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
