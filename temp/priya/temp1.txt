\adminCtrl.js\\
const doctorModel = require("../models/doctorModel");
const userModel = require("../model/userModels");

const getAllUsersController =async (req, res) =>{
    try{
        const users = await userModel.find({});
        res.status(200).send({
            success:true,
            message:"users data list",
            data:users,});
        }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error while fetching users",
            error,
        });
    }
};

const getAllDoctorsController =async (req, res) =>{
    try{
        const doctors = await doctorModel.find({});
        res.status(200).send({
            success:true,
            message:"Doctors data list",
            data:users,});
        }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error while getting doctor data",
            error,
        });
    }
};

const getAllUsersController =() =>{};
module.exports ={getAllDoctorsController ,getAllUsersController};