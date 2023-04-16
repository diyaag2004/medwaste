import React from 'react'

export default function publicroute() {
    if(localStorage.getItem('token')){
        return <navigate to="/" />
    }else{
        return children;
    }
}
