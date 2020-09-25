import React, { Component } from "react";

class Order extends Component {
    render(){
        return(
            <>
            <div  style={{display:"flex"}}>
          <div style={{height:300}}>
            <div style={{backgroundColor:"pink",width:400,height:100}}>
              Slide 1A
            </div>
            <div style={{backgroundColor:"green",width:400,height:200}}>
              Slide 1B
            </div>
          </div>
          <div style={{backgroundColor:"blue",width:1000}}>
            Slide 2
          </div>
        </div>
        </>
        );
    }};

    export default (Order);