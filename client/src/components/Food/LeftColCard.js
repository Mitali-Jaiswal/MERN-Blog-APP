import React from 'react'
import './LeftColStyle.css';

class LeftColCard extends React.Component {
    onShowFood=()=>{
        window.location.pathname=`/food/${this.props.food._id}`
    }

    render(){
        const {food}=this.props;
        return (
            <div className="left-col-card">
                
                <hr/>
                <div className="card-container2">
                    <button onClick={this.onShowFood} className="articleButton">
                    <img  className="img-container2"  src={food.image}></img>
                    </button>
    
                    <div className="horizontal-card2">
                       <h5 className="head-change2">{food.title}</h5>
                       <p className="horizontal-card-body2">{food.html}</p>
                       <p className="styleTravel">Posted <span className="styleAugust">/ August 21 2017</span></p>
    
                    </div>
                        
                </div>
    
                
            </div>
        )
    
    }
}

export default LeftColCard;