import React from 'react';
import './FixedComponentStyle.css';
export default function FixedComponent() {
    return (
        <div className="FixedComponent ">
            <div>
            <img className="clapping-img" src="clapping.png"></img>
            <span className="text-clap">9.3K</span>

           
            <p className="share ">  <i class="fas fa-share-alt-square fa-lg share-icon"></i><span className="text-share">share this article</span> </p>
           
            </div>
            
        </div>
    )
}
