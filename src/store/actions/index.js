const listRequested = () => {
  return {
    type: 'FETCH_LIST_REQUESTE',
  }
}

const listLoaded = (newList) => {
  return {
    type: 'FETCH_LIST_SUCCESS',
    payload: newList
  }
}

const listError = (error) => {
  return {
    type: 'FETCH_LIST_FAILURE',
    payload: error
  }
}

const fetchUpcoming = (upcomingService, dispatch) => () => {
  dispatch(listRequested());
  upcomingService.getUpcoming().then((data) => {
    dispatch(listLoaded(data))
  }).catch((error) => {
    dispatch(listError(error))
  })
}

export {
  fetchUpcoming,
  listError
}