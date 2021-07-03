import React, { Component } from "react";
import "./RightColImgStyle.css"

class RightColImg extends Component{
    onShowImg=()=>{
        window.location.pathname=`/Home/topSection/${this.props.topSection._id}`
    }
    render(){
        const {topSection}=this.props;
        return(
           <>
            <h5 className="text-heading2" >{topSection.title}</h5>
            {/* <h5 className="text-heading3" >You loved is doomed</h5> */}
            <p className="text-para2">Travel/ August 21 2017</p>
            <button className="btn-none" onClick={this.onShowImg}>
            <img  className="col21" src={topSection.image}></img>
            </button>
          
           </>
        )

    }
}

export default RightColImg;
