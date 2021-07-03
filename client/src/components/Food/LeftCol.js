import React from 'react';
import './LeftColStyle.css';
import LeftColCard from './LeftColCard';
import axios from "axios"

class LeftCol extends React.Component {
    
  state ={
    foods:[{
    }]
    
};

componentDidMount(){
    this.getPosts();
}

async getPosts(){
    const res = await axios.get("http://localhost:3000/foods");
    console.log(res);
    this.setState({foods:res.data});
    
}
 


renderList(){
    return this.state.foods.map(food=>{
        return(
            <LeftColCard food={food} key={food._id}/>
        );
    });
   
}
render(){
    return <div>
        <h2>Food</h2>
        {this.renderList()}
        </div>
}


}

export default LeftCol;


