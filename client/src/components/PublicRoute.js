import React, { children } from 'react';

export default function PublicRoute({children}) {
    if(localStorage.getItem('token')){
        return <navigate to="/" />
    }else{
        return children;
    }
}
