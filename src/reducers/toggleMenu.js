const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return action.open
    default:
      return state
  }
}

export default toggleMenu;