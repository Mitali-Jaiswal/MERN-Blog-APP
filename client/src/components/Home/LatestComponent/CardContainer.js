import CardLatestComponent from "./CardLatestComponent";
import "./LatestStyle.css";
import axios from "axios";
import React from 'react'

class CardContainer extends React.Component{
  
  state ={
    latests:[{
    }]
    
};

componentDidMount(){
    this.getPosts();
}

async getPosts(){
    const res = await axios.get("http://localhost:3000/latests");
    console.log(res);
    this.setState({latests:res.data});
    
}
 


renderList(){
    return this.state.latests.map(latest=>{
        return(
            <CardLatestComponent latest={latest} key={latest._id}/>
        );
    });
   
}
render(){
    return <div className="renderlatest">
        {this.renderList()}
        </div>
}

}





export default CardContainer;