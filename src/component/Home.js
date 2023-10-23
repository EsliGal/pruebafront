import React, {useState, useEffect} from "react";
import './contenedorEstrenos.css';
const Home =()=>{
    const [peliculas, setPeliculas] = useState([]);
    const url = 'https://api.themoviedb.org/3/search/movie';
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
            .then(res=> /*console.log*/setPeliculas(res))
            .catch(err => console.error('error:' + err)); 
          }
          getPeliculas()
    }, [])
    return(<div style={{textAlign: 'center', padding: '0px 50px 0px 50px'}}>
        <div className="estrenosCont"></div>
        <div className="estrenosCont"></div>
    </div>);
}

export default Home;