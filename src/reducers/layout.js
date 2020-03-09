import { Layouts } from '../actions'

const layout = (state = Layouts.GRID, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      if (action.layout) {
        return action.layout;
      } else {
        return state;
      }
    default:
      return state
  }
}

export default layout;