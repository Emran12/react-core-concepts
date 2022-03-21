import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const books = [
    {name: 'one minute madrasha', publication: 'al-arab prokashoni'}, 
    {name: 'higher math', publication: 'the royal'}
]

const products = [
    {name: 'laptop', price: 15300}, 
    {name: 'laptop', price: 15300}, 
    {name: 'laptop', price: 15300}, 
    {name: 'laptop', price: 15300}, 
]

function App() {
    const players = ['sakib', 'tamim', 'taskin', 'rubel']; 
    return (
        <div className='container'>
            {/* {
                players.map(player => <Person name={player}></Person>)
            }
            {
                books.map(book => <Library name = {book.name} publication = {book.publication}></Library>)
            }
            {
                products.map(product => <Product name = {product.name} price = {product.price}></Product>)
            }
            <Counter></Counter> */}
            <ExternalUsers></ExternalUsers>
        </div> 
        
    );
}

function Person (props) {
    return (
        <div className='info'>
            <h1>{props.name}</h1>
        </div>
       
    );
}

function Library (props) {
    return (
        <div className='info'>
            <h1>{props.name}</h1>
            <h3>{props.publication}</h3>
        </div>
    )
}

function Product (props){
    return (
        <div className='info'>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
        </div>
    )
}

function Counter (){
    const [count, setCount] = useState(100);
    const IncreaseValue = () => setCount(count + 1); 
    const DecreaseValue = () => setCount(count - 1);
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={IncreaseValue}>Increase</button>
            <button onClick={DecreaseValue}>Decrease</button>
        </div>
    )
}

function ExternalUsers (){
    const [users, setUsers] = useState([]); 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>External Users</h1>
            <p>{users.length}</p>
            {
                users.map(user => <User name={user.name} email = {user.email}></User>)
            }
        </div>
    )

}

function User (props) {
    return (
        <div style={{color:"green", border: "2px solid black", borderRadius: "10px", margin: "20px", textAlign: "center"}}> 
            <h1> Name:{props.name}</h1>
            <p> Email: {props.email}</p>
        </div>
    )
}
export default App;