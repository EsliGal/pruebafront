import React, {useState, useEffect} from "react";

const Tradding =()=>{
    const [tradding, setTradding] = useState([])
    const url = 'https://api.themoviedb.org/3/movie/popular';
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTQ4MzFjOGQ4ZmU2MTgyZTlhOTNmNGU0OGE5ZTI5NiIsInN1YiI6IjY1MzZhYWEzYzE0ZmVlMDEwMGVhM2JhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjoNK-aSfVpOnSglsvWVjNjR65DDOZrtHZI5R6oNaYg'
            }
          };          
     
        const getTradding =()=>{
            fetch(url, options)
            .then(res=> res.json())
            .then(res=> setTradding(res.results))
            .catch(err => console.error('error:' + err)); 
          }
          getTradding()
    }, [])
    return(
        <div className='contenedorGeneral' >
            {tradding.map((tradding) =>{
                return(
                    <div key={tradding.id} className="row" style={{textAlign: 'justify'}}>
                        <div className="card" style={{width:' 9rem', marginLeft: '25px' }}>
                            <div className="accionCont">
                                <img src={tradding.poster_path} alt={tradding.poster_path}/>
                            </div>
                            <h6>{tradding.title}</h6>
                            <p>{tradding.release_date}</p>
                        </div>
                    </div>
                )})}
        </div>
    );
}

export default Tradding;