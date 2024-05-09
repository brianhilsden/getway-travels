import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("")
  const [color, setColor] = useState({ nav: "transparent", text: "white" });
  const [showSearchBar,setShowSearchBar] = useState(true)
 

     
  useEffect(()=>{
    fetch("http://localhost:4001/packages")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
 
  const dataToDispay = data.filter((item) => {
    if (search.length > 0) {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return item;
    }
  })


  



  return (
    <>
    <Navbar search={search} setSearch={setSearch} color={color} setColor={setColor} showSearchBar={showSearchBar}/>
    <Outlet context={[dataToDispay,setColor,setData,setShowSearchBar]} />
    </>
  );
}

export default App;
