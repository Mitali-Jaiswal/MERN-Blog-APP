import React from 'react'

import './ArticlesCol1CardStyle.css';
import axios from "axios"


class ArticlesCol1Card extends React.Component{
    onArticle=()=>{
        window.location.pathname=`/Home/post/${this.props.post._id}`
    }

    render(){
        const {post}=this.props;
        return <div>
        <div >
         <div>
            
            <hr/>
            <div className="card-container">
                <button onClick={this.onArticle} className="articleButton" >
                <img  className="img-container"  src={post.image}/>
                </button>

                <div className="horizontal-card">
                   <h5 className="card-head">{post.title} </h5>
                   <p className="horizontal-card-body">{post.html} </p>
                   <p className="styleTravel">Travel <span className="styleAugust">/ August 21 2017</span></p>
            
                </div>
                    
            </div>
            
                    </div> 
    </div></div>
        
    }

}

export default ArticlesCol1Card;


