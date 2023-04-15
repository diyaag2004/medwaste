import React, { Children } from 'react'
import "../styles/LayoutStyles.css";
const Layout =({children}) =>{
    return (
        <>
        <div className="main">
            <div className="layout">
            <div className="sidebar">
            <div className="logo"> 
            <h6>DOC APP</h6>
            <hr/>
            </div>
            <div className="menu"></div>
            </div>
            <div className="content">
            <div className="header">Header</div>
            <div className="body">{Children}</div>
            </div>
            </div>
        </div>
        </>

    );
};
export default Layout