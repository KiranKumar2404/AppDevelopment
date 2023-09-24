import {
    TOGGLE_SIDEBAR,
    TOGGLE_DARK_MODE,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_LIGHT,
  } from './actions';
  
  const initialState = {
    isSidebarOpen: false,
    isDarkMode: false,
    isLightOn: false,
    todos: [],
  };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_SIDEBAR:
        return { ...state, isSidebarOpen: !state.isSidebarOpen };
      case TOGGLE_DARK_MODE:
        return { ...state, isDarkMode: !state.isDarkMode };
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
      case REMOVE_TODO:
        const updatedTodos = [...state.todos];
        updatedTodos.splice(action.payload, 1);
        return { ...state, todos: updatedTodos };
      case TOGGLE_LIGHT:
        return state;
      default:
        return state;
        switch (action.type) {
          case 'TOGGLE_LIGHT':
            return {
              ...state,
              isLightOn: action.payload,
            };
          default:
            return state;
        }
    }
  }
  
  export default rootReducer;
  