import React from 'react';
import TopPostCard from '../Home/ArticlesComponent/TopPostCard';
import './RightColStyle.css';
export default function RightCol() {
    return (
        <div className="RightCol">
            <div className="TopPost2">
                <h3 style={{marginTop:'25px',textAlign:'left'}}>Top Posts</h3>
                <img className="head-img22" src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
                <div style={{marginLeft:'5px'}}>
                    <h5 style={{marginTop:'20px'}}>The Best Sesame Soy  Broccoli Salad</h5>
                    <p className="styleTravel">Posted <span className="styleAugust">/ August 21 2017</span></p>
                  
                </div>
                {/* <TopPostCard />
                <TopPostCard />
                <TopPostCard /> */}
            </div>
            <div className="Advertistement2">
            <p style={{margin:'40%'}}>Advertistement</p>
           </div>
   
        </div>
    )
}
