import React from 'react';
import './Component.css';

const Header = (props) => {

    return (
        <div>
            <div className="navbar" >
                <h1 className="logo-h1">Todo App</h1>
                {/* <div className="menu-div">
                    <p className="menu">Menu</p>
                </div> */}
            </div>
        </div>
    )
}

export default Header
