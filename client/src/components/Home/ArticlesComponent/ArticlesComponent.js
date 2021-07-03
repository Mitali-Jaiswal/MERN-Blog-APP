import React from 'react'
import ArticlesCol1 from './ArticlesCol1'
import ArticlesCol2 from './ArticlesCol2'
import  './ArticlesStyle.css'

export default function ArticlesComponent() {
    return (
        <div>
           <h2 className="head-change-two" style={{marginTop:'20px'}}>Latest Articles</h2>
           <div className="flex-articles">
                <ArticlesCol1  />
                <ArticlesCol2 />
           </div>
            
        </div>
    )
}
