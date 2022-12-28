// Action types
export const FETCH_INFO = 'FETCH_INFO'
export const SET_INFO = 'SET_INFO'
export const FETCH_LAUNCHES = 'FETCH_LAUNCHES'
export const SET_LAUNCHES = 'SET_LAUNCHES'
export const SELECT_PAGE = 'SELECT_PAGE'
export const FETCH_ROCKETS = 'FETCH_ROCKETS'
export const SET_ROCKETS = 'SET_ROCKETS'
export const FETCH_DRAGONS = 'FETCH_DRAGONS'
export const SET_DRAGONS = 'SET_DRAGONS'

// Action Creators
export const fetchInfo = () => {
  return {
    type: FETCH_INFO
  }
}

export const setInfo = (payload) => {
  return {
    type: SET_INFO,
    payload
  }
}

export const fetchLaunches = offset => {
  return {
    type: FETCH_LAUNCHES,
    payload: offset
  }
}

export const setLaunches = launches => {
  return {
    type: SET_LAUNCHES,
    payload: launches
  }
}

export const handlePageChange = page => {
  return {
    type: SELECT_PAGE,
    payload: page
  }
}

export const fetchRockets = () => {
  return {
    type: FETCH_ROCKETS
  }
}

export const setRockets = rockets => {
  return {
    type: SET_ROCKETS,
    payload: rockets
  }
}

export const fetchDragons = () => {
  return {
    type: FETCH_DRAGONS
  }
}

export const setDragons = dragons => {
  return {
    type: SET_DRAGONS,
    payload: dragons
  }
}
