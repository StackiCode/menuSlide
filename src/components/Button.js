import React from 'react';

const Btn_nav = (props) => {
    return (
        <div className="btn_buger" onClick={props.click}>
            <span id="bar" className={props.anm.bar1}></span>
            <span id="bar" className={props.anm.bar2}></span>
            <span id="bar" className={props.anm.bar3}></span>
        </div>
    )
}

export default Btn_nav;