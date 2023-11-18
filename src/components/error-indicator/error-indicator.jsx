import React from "react";
import { connect } from "react-redux";

const ErrorIndicator =({error})=>{
  return <div>{error.message || error}</div>
}
const mapStateToProps = ({error})=>{
  return {error}
}
export default connect(mapStateToProps)(ErrorIndicator);