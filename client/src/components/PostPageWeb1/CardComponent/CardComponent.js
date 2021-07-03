import React from 'react';
import './CardComponentStyle.css';
import Card from './Card';

export default function CardComponent() {
    return (
        <div className="main-Card-Container">
            <div className="CardComponent">
                <h5>More From The Siren</h5>
                <hr/>
                <div className="flex-card">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
       
    )
}
