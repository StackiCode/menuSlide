import React from 'react';

const Sidemenu = (props) => {
    const anmSide = `side_bar ${props.sd_class}`;
    return (
        <div className={anmSide}>
            <div className="side_item1">About us</div>
            <div className="side_item2">Contact </div>
            <div className="side_item3">Members</div>
            <div className="side_item4">Product</div>
            <div className="side_item5">Career</div>
        </div>
    )
}

export default Sidemenu;