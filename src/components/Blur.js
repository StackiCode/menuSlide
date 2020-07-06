import React from 'react';

const Blur = (props) => {
    let clss = `blur ${props.anm}`;
    return (
        <div className={clss}></div>        
    )
}

export default Blur;