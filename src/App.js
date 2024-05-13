import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("")
  const [color, setColor] = useState({ nav: "transparent", text: "white",lineargradient:"" });
  const [showSearchBar,setShowSearchBar] = useState(true)
  const [component,setComponent] = useState("")
  const [loggedIn,setLoggedIn] = useState(false)
  const [sortChoice, setSortChoice] = useState("")
 

     
  useEffect(()=>{
    fetch("https://getway-travels-json.onrender.com/packages")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[component])
 
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

  function handleSort(sortChoice){
    if(sortChoice === "ascending"){
      return (a,b)=>a.price - b.price
    }
    else if (sortChoice === "descending"){
      return (a,b)=>b.price - a.price}
      else{
        return ()=>0
      }
  }

  return (
    <>
    <Navbar search={search} setSearch={setSearch} color={color} setColor={setColor} showSearchBar={showSearchBar} component={component} setShowSearchBar = {setShowSearchBar} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
    <Outlet context={[dataToDispay.sort(handleSort(sortChoice)),setColor,setData,setShowSearchBar,setComponent,loggedIn,sortChoice,setSortChoice]} />
    </>
  );
}

export default App;
