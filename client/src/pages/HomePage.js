import React,{useEffect} from 'react';
import axios from 'axios';

import Layout from '../components/layout';
const HomePage = () => {
  <Layout><h1>Home Page</h1></Layout>
  // login user data
//   const getUserData = async() =>{
//     try{
//   const res = await axios.post('/api/v1/user/getUserData',{},{ 
//     header:{
//       Authorization :"Bearer" +localStorage.getItem('token')
//     }

//   })
// } catch (error){
//   console.log(error)

// }
//   }
//   useEffect(() =>  
//   {
//     getUserData()
//   },[])
//   return (
//     <Layout><h1>Home Page</h1></Layout>

//   );
};

export default HomePage;