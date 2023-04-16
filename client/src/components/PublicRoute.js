import React from 'react'

export default function PublicRoute() {
    if(localStorage.getItem('token')){
        return <navigate to="/" />
    }else{
        return children;
    }
}
