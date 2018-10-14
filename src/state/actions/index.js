/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodoActionCreator(text) {
  return { type: ADD_TODO, text }
}

export function addTodo(text) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(addTodoActionCreator(text))
    }, 2500)
  }
}

export function toggleTodoActionCreator(index) {
  return { type: TOGGLE_TODO, index }
}

export function toggleTodo(index) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(toggleTodoActionCreator(index))
    }, 2500)
  }
}

export function setVisibilityFilterActionCreator(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function setVisibilityFilter(filter) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(setVisibilityFilterActionCreator(filter))
    }, 2500)
  }
}