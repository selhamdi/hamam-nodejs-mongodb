import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import {  useHistory} from "react-router-dom";
import axios from 'axios'

export default function Login () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:3001/client/signinclient',data)
         .then(response=>{
            history.push('/reservation')

            })
        .catch(err=>console.log(err))
    }
   
       
 
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Sign In</h4>

                <div className="form-group">
                    <label>phone</label>
                    <input type="text" className="form-control" name="phone" placeholder="Enter phone" {...register('phone')} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  name="password" placeholder="Enter password" {...register('password')}  />
                </div>

                

                <button type="submit" className="btn btn-danger ">Submit</button>
                <p className="forgot-password text-right">
                    
                </p>
               
            </form>
        );
    }