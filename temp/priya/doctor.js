
//user.js //
import React ,{useeffect ,usestate}from "react";
import Layout from '"./../components/layout";
import axios from "axios";
const [doctors, setDoctors] =useState([])
//getdoctors


const Doctors=()=>{
    const[doctors,setDoctors] = usestate([])
    //getdoctors
    const getAllDoctorsController = async()=>{
        try{
            const res =await axios.get('/api/v1/admin/getAllUser',{
                headers:{
                    Authorization:'Bearer ${localStorage.getItem('token')
                
                },
            });
        }if(res.data.success){
            setDoctors(res.data.data)
        }
        catch(error){
            console.log(error)
        }
       
       } ; 
useEffect(() =>{
    getdoctors();
},[]);
const columns =[
    {
        title :'Name',
        dataIndex:'name',
        render:(text,recoder) =>(
            <span>{recoder.firstName}{recoder.lastName}</span>
        )
    },
    {
        title:'status',
        dataIndex:'status'
    },
    {
        title:'phone'
        dataIndex:'phone'
    }
]
)
       return ( <Layout>
       
       <h1>All Doctor</h1>
       </Layout>
       )  }