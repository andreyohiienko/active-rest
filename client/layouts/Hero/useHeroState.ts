import { useReducer } from 'react'

export const UPDATE_TITLE = 'UPDATE_TITLE'
export const UPDATE_DESC = 'UPDATE_DESC'

function reducer(state, { type, payload }) {
  switch (type) {
    case UPDATE_TITLE:
      return state.map((slide) => {
        if (slide.id === payload.slideId) {
          return {
            ...slide,
            title: payload.updatedTitle,
          }
        }
        return slide
      })
    case UPDATE_DESC:
      return state.map((slide) => {
        if (slide.id === payload.slideId) {
          return {
            ...slide,
            desc: payload.updatedDesc,
          }
        }
        return slide
      })

    default:
      return state
  }
}

const useHeroState = (initialState = []) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function updateTitle(updatedTitle, slideId) {
    dispatch({ type: UPDATE_TITLE, payload: { updatedTitle, slideId } })
  }
  function updateDesc(updatedDesc, slideId) {
    dispatch({ type: UPDATE_DESC, payload: { updatedDesc, slideId } })
  }

  return { state, updateTitle, updateDesc }
}

export { useHeroState }
