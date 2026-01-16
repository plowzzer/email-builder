const emailBuilderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_BLOCK':
      return {
        ...state,
        ui: {
          selectedBlockType: action.payload.type,
          selectedBlockId: action.payload.id,
        }
      }

    case 'ADD_BLOCK':
      return {
        ...state,
        blocks: [...state.blocks, action.block],
      }

    case 'UPDATE_BLOCK':
      return {
        ...state,
        blocks: state.blocks.map(b =>
          b.id === action.id ? { ...b, ...action.payload } : b
        ),
      }

    case 'REMOVE_BLOCK':
      return {
        ...state,
        blocks: state.blocks.filter(b => b.id !== action.id),
      }

    case 'REORDER_BLOCKS': {
      const blocks = [...state.blocks]
      const [moved] = blocks.splice(action.from, 1)
      blocks.splice(action.to, 0, moved)
      return { ...state, blocks }
    }

    default:
      return state
  }
}

export default emailBuilderReducer
