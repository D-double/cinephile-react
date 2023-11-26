import {
  fetchError,
  fetchRequest,
  fetchLoaded
} from "../reducers/shared";

import {
  dataRequested,
  dataLoaded,
  dataError
} from '../reducers/popular';

const fetchPopular = (service, dispatch) => (type, page=1) => {
  dispatch(fetchRequest());
  dispatch(dataRequested());
  service.getPopular(type, page).then((data) => {
    dispatch(dataLoaded(data))
    dispatch(fetchLoaded())
  }).catch((error) => {
    let mess = error && error.message ? error.message : error;
    dispatch(fetchError(mess))
    dispatch(dataError())
  })
}

export default fetchPopular;