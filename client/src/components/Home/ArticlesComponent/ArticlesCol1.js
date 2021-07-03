import React from 'react'
import './ArticlesCol1Style.css';
import ArticlesCol1Card from './ArticlesCol1Card'
import ImgCol1 from './ImgCol1';
import axios from "axios";

class  ArticlesCol1 extends React.Component {
     state ={
              visible:4,
              posts:[{}]
    
            };

      componentDidMount(){
                   this.getPosts();
                  }

      async getPosts(){
          const res = await axios.get("http://localhost:3000/posts");
          console.log(res);
          this.setState({posts:res.data});
          
      }
      

          renderList(){
              return this.state.posts.slice(0,this.state.visible).map(post=>{
                  return(
                    <ArticlesCol1Card key={post._id} post={post}  />
                  );
              });
          };

          onLoadMore=()=>{
            this.setState((old)=>{
              return {visible:old.visible+2}
            })
            
          }

  render() {
    
    return (
      <div className="ArticlesCol1">
        {this.renderList()}
         
        <button onClick={this.onLoadMore} className="LoadMore">Load More</button>
        <ImgCol1 />
      </div>
  )
  }
}
export default ArticlesCol1;