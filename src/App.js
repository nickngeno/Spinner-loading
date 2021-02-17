import './App.css';
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

const [museuams, setMuseuams] = useState([])
const [loading, setLoading] = useState(true)

useEffect (()=> {
  fetchMuseuams()
},[])


const fetchMuseuams = async ()=>{
    
   try{

    const response = await axios.get(`https://fakestoreapi.com/products`)
      // console.log(response.data)
      setMuseuams(response.data)
      setLoading(false)
   }catch(e){
      console.log(e)
   }
    
}

  const muse = museuams.map(element => <li key ={element.id}>{element.title}</li>)
  return (
    <div className="App">
      <h2>Spinner on Loading</h2>
      {!loading ?( <ul>{muse}</ul> ):  < Spinner animation="border" /> }
    </div>
  );
}

export default App;
