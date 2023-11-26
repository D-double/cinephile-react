const addService = (service)=> (Wrapper)=>{
  return (props)=>{
    return (<Wrapper {...props} service={service}/>)
  }
}
export default addService;