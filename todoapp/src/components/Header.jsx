import React from 'react';
import './Component.css';

const Header = (props) => {

    const showAlert = () => {
        alert("hi")
    }
    return (
        <div>
            <div className="navbar" >
                <h1 className="logo-h1">Name</h1>
                <div className="menu-div">
                    <p className="add" onClick={showAlert}>Add</p>
                    <p className="menu">Menu</p>
                </div>
            </div>
        </div>
    )
}

export default Header
