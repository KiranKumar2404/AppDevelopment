
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_LIGHT = 'TOGGLE_LIGHT';


export function toggleSidebar() {
  return { type: TOGGLE_SIDEBAR };
}

export function toggleDarkMode() {
  return { type: TOGGLE_DARK_MODE };
}

export function addTodo(todo) {
  return { type: ADD_TODO, payload: todo };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, payload: index };
}

export function toggleLight(lightType) {
  return { type: TOGGLE_LIGHT, payload: lightType };
}

