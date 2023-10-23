import React from "react";
import Home from "../component/Home";

import './homescreen.css';
import Accion from "../component/accion";
import Tradding from "../component/tradding";

function HomeScreen (){    
    return (
        <div className='screen'>
            <div className='row'>
                <div className='col-3 estrenos text-center text-white'>
                    <div className="row">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="buscar" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outlines-primary text-white " type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="row ">
                        <h3 style={{textAlign: 'center', marginTop: '11px'}}>Estrenos</h3>
                        <Home/>
                    </div>
                </div>
                <div className='col-5'>
                    <h3 style={{textAlign: 'justify', marginTop: '25px', fontSize: '1.6em'}}>Acción</h3>
                    <Accion />
                    <h3 style={{textAlign: 'justify', marginTop: '25px', fontSize: '1.6em'}}>Tradding</h3>
                    <Tradding />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;