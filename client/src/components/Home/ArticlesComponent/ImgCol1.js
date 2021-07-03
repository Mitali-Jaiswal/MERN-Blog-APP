import React from 'react'
import { Component } from 'react';
import './ImgCol1Style.css'

 class ImgCol1 extends Component {
    onShowImg=()=>{
        window.location.pathname=`/Home/ImgCol1`
    }
   render() {
    return (
        <div className="img-last-col1">
             <h4  className="last-img-text1"> Title of vertical gallery</h4>
             <p className="last-img-text2">Travel/ August 21 2017</p>
             <button className="btn-none1" onClick={this.onShowImg}>  
                <img  className="Img-last" src="https://picsum.photos/id/188/367/267"></img>
            </button>
        </div>
    )
   }
}
export default ImgCol1;