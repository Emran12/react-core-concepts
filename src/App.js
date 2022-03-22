import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
    return (
        <div className='App'>
            <div>
                <LoadCountries></LoadCountries>
            </div>
            
        </div>
    )
}

function LoadCountries (){
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountries(data));
    },[])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div className='container'>
                {
                countries.map(country => 
                   <DisplayCountries name={country.name.common}continents = {country.continents} flag = {country.flags.png} population = {country.population}></DisplayCountries>
                )
            }
            </div>
            
        </div>
    )
}
function DisplayCountries (props){
    return (
        <div className='countries'>
             <h1>Name: {props.name}</h1>
              <p> <img style={{width:"300px", height:"300px"}} src= {props.flag} alt="" /> </p>
             <p>Continents: {props.continents}</p>
             <p>Population: {props.population}</p>  
        </div>
    )

}
export default App;