import React from 'react'
import './ArticlesCol2Style.css';
import TopPost from './TopPost';
export default function ArticlesCol2() {
    return (
        <div className="ArticlesCol2" >
           <div className="Advertistement">
            <p style={{margin:'40%'}}>Advertistement</p>
           </div>
           <TopPost/>
        </div>
    )
}
