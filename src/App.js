import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
       <Counter></Counter>
      <ExternalUser></ExternalUser>
     </div>
  );
}
function ExternalUser() {
  const [users,setUsers] =useState([]);

  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>External User</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
  
}

function User(props) {
  return(
    <div className="shipon">
      <h3>name: {props.name}</h3>

      <p>Email:{props.email}</p>
    </div>
  )
  
}

function Counter() {
  const [count,setCount] = useState(0);
  const handleDecrease =()=> setCount(count -1);
  const handleIncrease =()=> setCount(count +1);
  
    
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button  className="hey" onClick={handleDecrease}>Incense -</button>
      <button className="hello" onClick={handleIncrease}>Incense +</button>
      
    </div>
  )
  
}
function Shipon(props) {
  const ColorStyle ={
    color:'green',
    
  }
  
  return (
    <div className="shipon" style={ColorStyle}>
      <h1>Name:{props.name}</h1>
      <h1>price:{props.price}</h1>
    </div>
  )
  
}

/* 
const shipons = [
   {name:'shipon', price: 2000},
   {name:'Arif',  price: 2000},
   {name:'Habib', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
   {name:'Josim', price: 2000},
  ]
*/
/* 
{
       shipons.map(shipon => <Shipon name={shipon.name} price={shipon.price}></Shipon>) 
      }
*/

export default App;

