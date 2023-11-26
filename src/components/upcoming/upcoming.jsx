import UpcomingItem from './UpcomingItem';
import checkData from '../hoc/checkData-hoc.jsx';

import { Transition } from "react-transition-group";

const UpcomingList = ({data, slideView, nextSlide})=>{
  return (
    <div className="upcoming">
      { data && data.map((elem, index, arr)=>{
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
        })
      }
    </div>
  ); 
}

export default checkData(UpcomingList);