import { useRouteError } from "react-router-dom";
import { connect } from 'react-redux';
import ErrorIndicator from '../components/error-indicator';
import { fetchError } from '../store/reducers/shared';

const ErrorPage = ({fetchError}) => {
  const routerError = useRouteError()
  let mess = routerError && routerError.statusText ? routerError.statusText :
  routerError && routerError.message ? routerError.message :
  routerError ? reportError : 'Page Not Found';
  fetchError(mess)  
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <ErrorIndicator/>
    </div>
  );
};

const mapStateToProps = ({shared})=>{
  return {...shared}
}
const mapDispatchToProps = {fetchError}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);