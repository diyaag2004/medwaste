import React, { Children } from 'react';
import "../styles/layoutStyles.css";
import { sidebarMenu } from '../data/data';
import {Link} from 'react-router-dom';
const Layout =({Children}) =>{
    return (
        
        <>
        <div className="main">
            <div className="layout">
            <div className="sidebar">
            <div className="logo"> 
            <h6>DOC APP</h6>
            <hr/>
            </div>
            <div className="menu">
                {sidebarMenu.map(menu => {
                    return (
                        <>
                        <div className='mennu-item'>
                            <i className={menu.icon}></i>
                            <Link to={menu.path}>{menu.name}</Link>
                            </div>
                            </>
                    )
                })}
            </div>
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
export default Layout;