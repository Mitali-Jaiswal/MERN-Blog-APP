import React, { Component } from 'react'
import './TopPostCardStyle.css';
 class TopPostCard extends Component {
     onShowTopPost=()=>{
        window.location.pathname=`/Home/topPost/${this.props.topPost._id}`
     }
    render(){
        const {topPost}=this.props;
        return (
            <div>
                 <hr/> 
                <div className="TopPostCardContainer">
                    <button className="btn-top-post" onClick={this.onShowTopPost} >
                    <img  className="TopPost-img"  src={topPost.image}></img>
                    </button>
    
                    <div className="TopPost-Card-Body">
                       <h6 className="topPostTitle">{topPost.title}</h6>
                       <p style={{marginTop:'20px'}} className="styleTravel">Posted <span className="styleAugust">/ August 21 2017</span></p>
                       
                    </div>
                    
                </div>
               
                
            </div>
        )
    }
}

export default TopPostCard;
