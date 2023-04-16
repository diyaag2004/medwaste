import React from 'react'

export default function Protectedroute({children}) {
    if(localStorage.getItem("token")){
        return children
    }else{
        return <Navigate to="/login"/>
    }
}
