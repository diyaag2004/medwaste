import React, { children } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { showLoading } from '../redux/features/alertslice';

export default function ProtectedRoute({children}) {
    const Dispatch = useDispatch()
    const {user} = useSelector(state => state.user)

    const getUser =async() => {
        try {
            Dispatch(showLoading())
            const res = await axios.post('/api/v1/user/')
        }   catch (error) {
            console.log(error)
        }
    }
    if(localStorage.getItem("token")){
        return children
    }else{
        return <navigate to="/login"/>
    }
}
