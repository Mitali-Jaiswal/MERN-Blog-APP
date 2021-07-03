import React from 'react'
import './CardStyle.css';

export default function Card() {
    return (
        <div className="Card-container">
            <img className="card-img11" src="https://picsum.photos/id/1051/367/267"></img>
            <h5 className="card-title11">Joshua Tree <br/> Overnight Adventure</h5>
            <div className="ArticleBody-flex">
            <img className="logo-img" src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg"></img>
                <p className="head-text" >Himari Yoshimura <p className ="date">Jan 28, 2019 · 10 min read</p></p>

            </div>
          
        </div>
    )
}
