import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]); // State for storing fetched data
  const [search, setSearch] = useState(""); // State for storing search input
  const [color, setColor] = useState({
    nav: "transparent",
    text: "white",
    lineargradient: "",
  }); // State for dynamic style changes
  const [showSearchBar, setShowSearchBar] = useState(true); // State to show or hide the search bar
  const [component, setComponent] = useState(""); // State for current component indication
  const [loggedIn, setLoggedIn] = useState(false); // State for user's authentication status
  const [sortChoice, setSortChoice] = useState(""); // State to store sorting choice

  useEffect(() => {
    fetch("https://getway-travels-json.onrender.com/packages")
      .then((res) => res.json())
      .then((data) => setData(data)); // Updating state with fetched data
  }, [component]); // Effect depends on component change

  const dataToDispay = data.filter((item) => {
    // Filter data based on search input
    if (search.length > 0) {
      // Condition if there is a search query
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return item;
    }
  });

  function handleSort(sortChoice) {
    // Function to handle sorting of items
    if (sortChoice === "ascending") {
      // If choice is 'ascending'
      return (a, b) => a.price - b.price;
    } else if (sortChoice === "descending") {
      // If choice is 'descending'
      return (a, b) => b.price - a.price;
    } else {
      return () => 0;
    }
  }

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        color={color}
        setColor={setColor}
        showSearchBar={showSearchBar}
        component={component}
        setShowSearchBar={setShowSearchBar}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Outlet
        context={[
          dataToDispay.sort(handleSort(sortChoice)),
          setColor,
          setData,
          setShowSearchBar,
          setComponent,
          loggedIn,
          sortChoice,
          setSortChoice,
        ]}
      />
    </>
  );
}

export default App;
