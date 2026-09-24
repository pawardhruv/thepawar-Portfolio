import { createStore } from 'redux';

const initialState = { activeSection: 'home', menuOpen: false, cursorEnabled: true };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SECTION':
      return { ...state, activeSection: action.payload };
    case 'TOGGLE_MENU':
      return { ...state, menuOpen: !state.menuOpen };
    case 'CLOSE_MENU':
      return { ...state, menuOpen: false };
    case 'TOGGLE_CURSOR':
      return { ...state, cursorEnabled: !state.cursorEnabled };
    default:
      return state;
  }
}

export const store = createStore(reducer);