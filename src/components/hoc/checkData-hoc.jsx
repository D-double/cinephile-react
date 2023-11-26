import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const checkData = (View) => (props) => {
  const { loading, error } = props;
  
  if (loading) {
    return <Spinner/>
  }
  else if(error) {
    return <ErrorIndicator/>
  }
  else {
    return <View {...props}/>
  }
}

export default checkData;