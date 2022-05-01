import React from "react";

const TabOptions = (props) => {
    return (
        <div>
            <button onClick={() => { props.setActiveScreen('Nightlife') }}>Click</button>
        </div>
    );
}

export default TabOptions;