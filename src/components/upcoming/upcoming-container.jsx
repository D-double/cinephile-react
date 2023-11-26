import React, { Component } from 'react';
import addService from '../hoc/addService-hoc.jsx';
import {compose} from '../../utils';
import { fetchUpcoming } from '../../store/actions';
import { connect } from 'react-redux';
import UpcomingService from "../../services/upcoming-service.js";
import UpcomingList from './upcoming.jsx';

class UpcomingContainer extends Component {
  state = {
    slideView: 0,
    timeout: null
  }
  
  componentDidMount(){
    this.props.fetchUpcoming()
    this.autoPlay()
  } 
  autoPlay = ()=>{
      let id = setTimeout(() => {
        let current = this.state.slideView;
        let length = this.props.data.length; 
        let next = length > current + 1 ? current + 1 : 0;
        this.setState({slideView: next})
        this.autoPlay()
      }, 5000)
      this.setState({ timeout: id })
  }
  nextSlide = (val)=>{
    clearTimeout(this.state.timeout)
    this.setState({slideView: val})
    this.autoPlay()
  }
  render() { 
    return <UpcomingList {...this.props} slideView={this.state.slideView} nextSlide={this.nextSlide}/>
  }
}

// То что хотим получить из хранилища
const mapStateToProps = ({upcoming, shared})=>{
  return {...upcoming, ...shared}
}

const mapDispatchToProps = (dispatch, {service} )=>{
  
  return {
    fetchUpcoming: fetchUpcoming(service, dispatch)
  }
}

// export default addService()(
//   connect(mapStateToProps,mapDispatchToProps)(Upcoming)
//   );
export default compose(
  addService(new UpcomingService()),
  connect(mapStateToProps,mapDispatchToProps)
)(UpcomingContainer)