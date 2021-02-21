import React from "react";
import '../style.css';
import image from '../Untitled.jpg';

export default ({name,time,today ,comment})=>{
    return( 
        <div>
          <div className="part">
            <img src={image} width="50" height="50" />
          </div>
          <div className="part">
            <div id="namePart">{name}<span id="RightPart">{today+time}</span></div>
                <div>{comment}</div>
            </div>
        </div>
    );
};