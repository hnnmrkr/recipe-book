import React from 'react';
import image from '../img/3343542.jpg';

const Introduction = () => (
    <div className="introduction-container">
        <div className="text-left">
            <h1>Welcome to <span className="highlight">Food Court</span></h1>
            <p>Food Court is recipe collection where you can find and add new and delicious recipes. Use the searchbar below to start your cooking journey!</p>
        </div>

        <img className="image-right" src={image} alt="chef-cooking"/>
    </div>
);

export default Introduction;
