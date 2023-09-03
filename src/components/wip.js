import React from "react";

const WIP = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <img id="temp-img" src={require('../assets/under-construction.png')} alt="Under Construction" />
            <p className="temp-txt">Under Construction</p>
        </div>
    );
}
export default WIP;