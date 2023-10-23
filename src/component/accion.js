import React, {useState, useEffect} from "react";

const Accion =()=>{
    const [peliculas, setPeliculas] = useState([]);
    const url = 'https://api.themoviedb.org/3/discover/movie';
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTQ4MzFjOGQ4ZmU2MTgyZTlhOTNmNGU0OGE5ZTI5NiIsInN1YiI6IjY1MzZhYWEzYzE0ZmVlMDEwMGVhM2JhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjoNK-aSfVpOnSglsvWVjNjR65DDOZrtHZI5R6oNaYg'
            }
          };          
        const getPeliculas =()=>{
            fetch(url, options)
            .then(res=> res.json())
            .then(res=> setPeliculas(res.results))
            .catch(err => console.error('error:' + err)); 
          }
          getPeliculas()
    }, [])
    return(
        <div className='contenedorGeneral' >
            {peliculas.map((pelicula) =>{
                return(
                    <div key={pelicula.id} className="row" style={{textAlign: 'justify'}}>
                        <div className="card" style={{width:' 9rem', marginLeft: '25px' }}>
                            <div className="accionCont">
                                <img src={pelicula.poster_path} alt={pelicula.poster_path}></img>
                            </div>
                            <h6>{pelicula.title}</h6>
                            <p>{pelicula.release_date} - {}</p>
                        </div>
                    </div>
                )})}
        </div>
    );
}

export default Accion;