import {
  fetchError,
  fetchRequest,
  fetchLoaded
} from "../reducers/shared";

import {
  dataRequested,
  dataLoaded,
  dataError
} from '../reducers/upcoming';

const fetchUpcoming = (service, dispatch) => () => {
  dispatch(fetchRequest());
  dispatch(dataRequested());
  service.getUpcoming().then((data) => {
    dispatch(dataLoaded(data))
    dispatch(fetchLoaded())
  }).catch((error) => {
    let mess = error && error.message ? error.message : error;
    dispatch(fetchError(mess))
    dispatch(dataError())
  })
}

export default fetchUpcoming;