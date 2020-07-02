import React from 'react';
import styled from 'styled-components'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions/index.js"

const Box = styled.div`
height:120px;
width: 290px;
background-color:#FFFFFF;
border-radius:0%;
display:inline-block;
border-radius:10px;
`
const Title = styled.h1`
color:#232323;
font-size: 1.4rem;
text-align: center;
padding-top:1rem;
font-family: 'Roboto', sans-serif;
`
class Card extends React.Component {
    componentDidMount() {
      this.props.requestApiData();
    }
    brand = (x) =>
      <div key={x._id}>
        <Box>
          <Title>
          {x.brandName}
          </Title>
        </Box>
      </div>;
  
    render() {
      return this.props.data.length ?  (
        <>
        { Object.values(this.props.data).map(value=>{
        return this.brand(value) ;
        })}
        </>) : <h1> Loading....</h1>
    }
  }
  
  const mapStateToProps = state => ({ data: state.data });
  const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);
  