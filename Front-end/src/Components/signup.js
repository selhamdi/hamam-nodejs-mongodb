import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'






export default function SignUp () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
            
        
         axios.post('http://localhost:3001/client/signupclient',data)
         .then(response=>{
            
            console.log(response)
           history.push('/sign-in')
            })
        .catch(err=>console.log(err))
        
    }
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Prenom</label>
                    <input type="text" className="form-control" name="prenom" placeholder="prenom" {...register('prenom')}/>
                </div>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" name="nom" placeholder="nom" {...register('nom')}/>
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input type="text" name="phone" className="form-control" placeholder="Phone" {...register('phone')}/>
                </div>
                <div className="form-group">
                    <label>date de naissance</label>
                    <input type="date" name="date_naissance" className="form-control" placeholder="date_naissance" {...register('date_naissance')}/>
                </div>

                <div className="form-group">
                    <label>genre</label>
                    <input type="text" name="genre"  className="form-control" placeholder="Enter genre" {...register('genre')}/>
                </div>
                <div className="form-group">
                    <label>cin</label>
                    <input type="text" name="cin"  className="form-control" placeholder="Enter age" {...register('cin')}/>
                </div>
                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" {...register('password')}/>
                </div>

                <button type="submit" className="btn btn-danger ">Sign Up</button>
                <p className="forgot-password text-center">
                    Already registered  <Link to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
            
        );
   
    
}
