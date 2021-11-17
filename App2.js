import React, { useState } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida


function App() {

  const [busqueda, setBusqueda] = useState({
    search: ''
  });

  const {search} = busqueda;
  
  const handleChange = (e) =>{
    setBusqueda({
      [e.target.name] : e.target.value
    });  
  }
  

    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" name="search"
            onChange={handleChange}
          />
        </div>
        <ul>
          {
            posts.filter((val)=> {
              if (search === '') {
                  return val
              }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map((post, key) => {
              return(
                <li key={key}>
                  <a href={post.url}><img src={post.image } /></a>
                  <p>{ post.title }</p>
                </li>
              );
            })
          }          
        </ul>
      </div>
    )
}


export default App;