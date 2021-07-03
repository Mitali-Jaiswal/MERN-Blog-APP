import React, { Component } from 'react';
import './StoriesCardStyle.css';


 class StoriesCard extends Component {

   render(){
       const {story}=this.props;
    return (
        <div className="Stories-Card innerflex">
           
           <h4 className="head-change">{story.title}</h4>
           <p className="Stories-para">{story.html}</p>
           <p className="tech">TECH<span className="para-today">/ TODAY AT 11:54</span></p>
            
        </div>
    )
   }
}

export default StoriesCard;