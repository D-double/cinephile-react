import { connect } from "react-redux";

const ErrorIndicator =({error})=>{
  
  return <div>{ error && error.message ? error.message : error}</div>
}
const mapStateToProps = ({shared})=>{

  return {...shared}
}
export default connect(mapStateToProps)(ErrorIndicator);