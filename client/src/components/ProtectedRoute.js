import React, { children } from 'react';

export default function ProtectedRoute({children}) {
    if(localStorage.getItem("token")){
        return children
    }else{
        return <navigate to="/login"/>
    }
}
