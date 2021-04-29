import React, { Component } from "react";
// import {useForm} from 'react-hook-form'
// import {  useHistory} from "react-router-dom";
import axios from 'axios'
import '../dashboard.css'

export default function Dashboard () {
    const [dashboard,setDasboards] = React.useState([])
    function getProduct() {
        axios.get('http://localhost:3001/reservation/getAll')
        .then(response=>setDasboards(response.data))
        .catch(err=>console.log(err))
    }

    React.useEffect(() => {
        getProduct()
    }, [])
   
       
 
        return (
            <div className="App">   
            <nav class="menu" tabindex="0">
	<div class="smartphone-menu-trigger"></div>
  <header class="avatar">
		<img src="https://vignette.wikia.nocookie.net/fan-fiction-library/images/1/15/Admin.png/revision/latest?cb=20140917130743" />
    <h2>Admin</h2>
  </header>
	<ul>
    <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
  </ul>
</nav>

<main>
{
                        dashboard.map(prd=>(
                            <div className="product">
                            <div className="block1">
                            <figure className="snip1249">
                                <figcaption>
                                    <h2 >{prd.date}</h2>
                                    <p>{prd.heure}</p>
                                    
                                </figcaption>
                            </figure>
                        </div>
                        </div>

                        ))
                    }
</main>        
            </div>
        );
    }