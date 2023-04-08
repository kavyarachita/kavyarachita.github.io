import React from "react";

function Content() {

    return (
        <div className='content-container'>
            <div className="content">
                <img id="temp-img" src={require('../assets/under-construction.png')} alt="Under Construction" />
                <p className="temp-txt">UNDER CONSTRUCTION</p>
            </div>
        </div>
    );
}
export default Content;