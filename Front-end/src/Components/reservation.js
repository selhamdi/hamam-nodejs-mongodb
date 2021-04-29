import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import {  useHistory} from "react-router-dom";
import axios from 'axios'

export default function Reser () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:3001/reservation/addreservation',data)
         .then(response=>{
            history.push('/reservation')

            })
        .catch(err=>console.log(err))
    }
   
       
 
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>New reservation </h4>

                <div className="form-group">
                    <label>nombre de place</label>
                    <input type="number" className="form-control" name="N_place" placeholder="Enter nombre de place" {...register('N_place')} />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control"  name="date" placeholder="Enter date" {...register('date')}  />
                </div>

                

                <button type="submit" className="btn btn-danger ">Submit</button>
                <p className="forgot-password text-right">
                    
                </p>
               
            </form>
        );
    }