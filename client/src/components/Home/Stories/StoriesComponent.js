import React,{Component} from 'react';
import StoriesCard from './StoriesCard';
import './StoriesStyle.css';
import axios from "axios"
class StoriesComponent extends Component {
    
  state ={
      visible:3,
    stories:[{
    }]
    
};

componentDidMount(){
    this.getPosts();
}

async getPosts(){
    const res = await axios.get("http://localhost:3000/stories");
    console.log(res);
    this.setState({stories:res.data});
    
}
 


renderList(){
    return this.state.stories.slice(0,this.state.visible).map(story=>{
        return(
            <StoriesCard story={story} key={story._id}/>
        );
    });
   
}

onViewMore=()=>{
    this.setState((old)=>{
        return {visible:old.visible+3}
      })
      
}
render(){
    return <div className="StoriesComponent">
        
        <h2 className="head-change-two">Latest Stories</h2>
         <hr/>
         <div className="Stories-flex">
          
                 {this.renderList()}
            
        </div>
        <hr/>
        <button onClick={this.onViewMore} className="ViewMore">View More</button>
        </div>
}

  
}


export default StoriesComponent;

