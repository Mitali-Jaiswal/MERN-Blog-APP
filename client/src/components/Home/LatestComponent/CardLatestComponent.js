import React from "react";
import CardLatestStyle from './CardLatestStyle.css';


class CardLatestComponent extends React.Component{
   
    onShowLatest=()=>{
        window.location.pathname=`/Home/latest/${this.props.latest._id}`
    }

    render(){
        const {latest} = this.props;
    
        return(
            <div className="container2 ">
            <button onClick={this.onShowLatest} className="latestButton">
                 <img className="card-img" src={latest.image}></img>
            </button>
            <div className="card-body" >
                <p className="card-title">{latest.title}</p>
                <p className="card-text">{latest.html}</p>
            </div>
       </div>
        )
    }

}
export default CardLatestComponent;

