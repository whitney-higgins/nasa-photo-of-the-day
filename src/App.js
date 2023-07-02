import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NasaPhoto from "./components/NasaPhoto";

// This component will hold state
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Photo of the day:</h1>
      {data && <NasaPhoto data={data} />}
    </div>
  );
}

export default App;
