import React from 'react';
import axios from "axios"

class InnerLeft extends React.Component{

     
    state ={
        food:[]
        
    };

    componentDidMount(){
        this.getPosts();
    }

    async getPosts(){
        const res = await axios.get(`http://localhost:3000/foods/${this.props.match.params.id}`);
        
        this.setState({food:res.data});
        
        
    }
    back=()=>{
        window.location.pathname=`/food`
    }
    renderList(){
        return(
            <>
        <div className="PostPageHeader">
            <h3 className="Header-logo">Siren</h3>
            <button onClick={this.back} className="Get-Started">Get-Back</button>  
        </div>
        <div className="ArticleBody">
            <h4 className="head-change-4">{this.state.food.title}</h4>
            <div className="main-flex-card">
                <div className="ArticleBody-flex">
                    <img className="logo-img" src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg"></img>
                    <p className="head-text" >Himari Yoshimura <p className ="date">Jan 28, 2019 · 10 min read</p></p>
                </div>
                
                <div className="icon-container">
                <i className="fab fa-facebook-square fa-lg icons"></i>
                <i className="fab fa-twitter-square fa-lg icons"></i>
                <i className="fab fa-instagram-square fa-lg icons"></i>
                <i className="fab fa-youtube-square fa-lg icons"></i>
                </div>
            
            </div>
            
            <img className="react-img" src={this.state.food.image}></img>
            <p className="Article-para">{this.state.food.description}</p>
            <img className="code-img" src={this.state.food.secondImg}></img>
            {/* <button className="Article-button">React</button>
            <button className="Article-button">javascript</button>
            <button className="Article-button">Animation</button> */}
            {/* <div className="clap-footer">
                <img className="clapping-img" src="clapping.png"></img>
                <span className="text-clap">9.3K claps</span>
            </div> */}
            <hr/>
            <div className="footer-block">
                <img className="logo-img" src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg"></img>
                <p className="written-by">WRITTEN BY   <p className="para-text2" >Himari Yoshimura <p className ="date">Jan 28, 2019 · 10 min read</p></p></p>
            </div>
            <hr/>
         </div>

            </>
        )
      
       
    }

    render(){
        return(
            <div>{this.renderList()}</div>
        )
    }
     

}

export default InnerLeft; 