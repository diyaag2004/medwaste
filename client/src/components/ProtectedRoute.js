import React, { children } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertslice';
import axios from 'axios';

export default function ProtectedRoute({children}) {
    const Dispatch = useDispatch()
    const {user} = useSelector(state => state.user)

    const getUser =async() => {
        try {
            Dispatch(showLoading())
            const res = await axios.post('/api/v1/user/getUserData',{
             token: localStorage.getItem('token')
            },{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }}
            )
            Dispatch(hideLoading())
        }   catch (error) {
            Dispatch(hideLoading())
            console.log(error)
        }
    }
    if(localStorage.getItem("token")){
        return children
    }else{
        return <navigate to="/login"/>
    }
}
