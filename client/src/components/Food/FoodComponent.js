import React from 'react';
import './FoodStyle.css';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import Header from '../Header/Header';
export default function Component() {
    return (
        <>
        <Header />
        <div className="flex-bollywood">
           <LeftCol />
           {/* <RightCol /> */}
        </div>
        </>
    )
}
