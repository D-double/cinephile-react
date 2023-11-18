import React from "react";
import { useRouteError } from "react-router-dom";
import { connect } from 'react-redux';
import ErrorIndicator from '../components/error-indicator';
import { listError } from '../store/actions';

const ErrorPage = ({error, listError}) => {
  const routerError = useRouteError()
  listError(routerError.statusText || routerError.message)  
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. ({error})</p>
      <ErrorIndicator/>
    </div>
  );
};

const mapStateToProps = ({error})=>{
  return {error}
}
const mapDispatchToProps = {listError}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);