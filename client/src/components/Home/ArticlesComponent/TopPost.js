import React, { Component } from 'react';
import TopPostCard from './TopPostCard';
import './TopPostStyle.css';
import axios from 'axios';


 class  TopPost extends Component {
    
    state ={
    
        topPosts:[{}]

      };

componentDidMount(){
             this.getPosts();
            }

async getPosts(){
    const res = await axios.get("http://localhost:3000/topPost");
    console.log(res);
    this.setState({topPosts:res.data});
    
}


    renderList(){
        return this.state.topPosts.slice(0,4).map(topPost=>{
            return(
              <TopPostCard key={topPost._id} topPost={topPost}  />
            );
        });
    };




    render(){
        return (
            <div className="TopPost">
                <h3 className="head-change-two" style={{marginTop:'25px',textAlign:'left'}}>Top Posts</h3>
                {/* <img className="head-imgg" src="https://picsum.photos/id/1050/367/267"></img>
                <div style={{marginLeft:'5px'}}>
                    <h5 className="head-change" style={{marginTop:'20px'}}>Catch waves with an <br/> adventure guide</h5>
                    <p className="styleTravel">Travel <span className="styleAugust">/ August 21 2017</span></p>
                 
                </div> */}

                {this.renderList()}
            </div>
        )
    }
}
export default TopPost;