import React, { Component } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import UpcomingItem from './UpcomingItem';
import Spinner from '../spinner';
import withUpcomingService from '../hoc/upcoming-service-hoc';
import {compose} from '../../utils';
import { fetchUpcoming } from '../../store/actions';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { Transition } from "react-transition-group";

const UpcomingList = ({list, slideView, nextSlide})=>{
  return (
    <div className="upcoming">
      {
        list.map((elem, index, arr)=>{
          let nextIndex = arr.length > index+1 ? index+1 : 0
          return (
            <Transition key={elem.id} 
            in={slideView == index} 
            timeout={500} 
            unmountOnExit={true}>
              {(state) => <UpcomingItem key={elem.id}
               current={elem} 
               nextIndex = {nextIndex}
               next={arr[nextIndex]}
               slideView={slideView}
               fade={state}
               nextSlide={nextSlide}
               />}
            </Transition>
          )
          // return (
          //     slideView == index && <UpcomingItem key={elem.id}
          //      current={elem} 
          //      index = {index}
          //      next={arr[ arr.length > index+1 ? index+1 : 0]}
          //      slideView={slideView}
          //      />
          //    )
        })
      }
    </div>
  ); 
}

class UpcomingContainer extends Component {
  state = {
    slideView: 0,
    timeout: null
  }
  
  componentDidMount(){
    // 1. receive data
    // const {upcomingService, listLoaded, listRequested, listError} = this.props;
    // listRequested();
    // upcomingService.getUpcoming().then((data)=>{
    //   // 2. dispatch action to store
    //   listLoaded(data)
    // }).catch((error)=> {
    //   listError(error)
    // })
    this.props.fetchUpcoming()
    this.autoPlay()
  } 
  autoPlay = ()=>{
    let id = setTimeout(() => {
      let current = this.state.slideView;
      let length = this.props.list.length; 
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
    const { list, loading, error } = this.props;
    if (loading) {
      return <Spinner/>
    }
    else if(error) {
      return <ErrorIndicator/>
    }
    else {
      return <UpcomingList list={list} slideView={this.state.slideView} nextSlide={this.nextSlide}/>
    }
  }
}

// То что хотим получить из хранилища
const mapStateToProps = ({list, loading, error})=>{
  return {list, loading, error}
}

const mapDispatchToProps = (dispatch, {upcomingService} )=>{
  
  return {
    fetchUpcoming: fetchUpcoming(upcomingService, dispatch)
  }
}
// const mapDispatchToProps = {listLoaded, listRequested, listError}
// const mapDispatchToProps = (dispatch)=>{
//   return bindActionCreators({listLoaded}, dispatch)
// }
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     listLoaded: (newList)=>{
//       dispatch(listLoaded(newList))
//     }
//   }
// }
 
// export default withUpcomingService()(
//   connect(mapStateToProps,mapDispatchToProps)(Upcoming)
//   );
export default compose(
  withUpcomingService(),
  connect(mapStateToProps,mapDispatchToProps)
)(UpcomingContainer)