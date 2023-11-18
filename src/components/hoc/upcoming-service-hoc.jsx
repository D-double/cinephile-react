import React from 'react';
import { UpcomingServiceConsumer } from '../../context/upcoming-service-context';

const withUpcomingService = ()=> (Wrapper)=>{
  return (props)=>{
    return (
      <UpcomingServiceConsumer>
        {
          (upcomingService)=>{
            return (<Wrapper {...props} upcomingService={upcomingService}/>)
          }
        }
      </UpcomingServiceConsumer>
    );
  }
}

export default withUpcomingService;