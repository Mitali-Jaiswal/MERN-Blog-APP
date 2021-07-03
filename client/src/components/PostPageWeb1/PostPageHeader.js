import React, { Component } from 'react'
import './PostPageHeaderStyle.css';

 class PostPageHeader extends Component {
     onBack=()=>{
        window.location.pathname="./Home"
    }
   render(){
    return (
        <div className="PostPageHeader">
        <h3 className="Header-logo">Siren</h3>
        <button onClick={this.onBack} className="Get-Started">Get Back</button>  
        </div>
    )
   }
}

export default PostPageHeader
