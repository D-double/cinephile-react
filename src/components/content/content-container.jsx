import React, { useEffect, useState } from 'react';
import addService from "../hoc/addService-hoc.jsx";
import { compose } from "../../utils/index.js";
import { fetchPopular } from "../../store/actions/index.js";
import { connect } from "react-redux";
import PopularService from "../../services/popular-service.js";
import ContentList from "./content.jsx";

const ContentContainer = (props) => {
  let [content, setContent] = useState([]);
  useEffect(() => {
    props.fetchPopular(props.type)
    if (props.type == 'movie') {
      setContent(props.moviesList)
    } else {
      setContent(props.tvsList)    
    }
  }, []);
  useEffect(()=>{
    if (props.type == 'movie') {
      setContent(props.moviesList)
    } else {
      setContent(props.tvsList)    
    }
  })
  return <ContentList {...props} content={content}/>;
  // return <p>5</p>;
};

const mapStateToProps = ({ popular, shared }) => {
  return { ...popular, ...shared };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    fetchPopular: fetchPopular(service, dispatch),
  };
};

export default compose(
  addService(new PopularService()),
  connect(mapStateToProps, mapDispatchToProps)
)(ContentContainer);
// export default Content;
