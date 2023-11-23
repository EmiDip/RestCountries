import { useState, useEffect } from "react";
import { fetchCountriesData } from "./api/api";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await fetchCountriesData();
        console.log("Countries Data:", countriesData);
      } catch (error) {
        // Gérer les erreurs si nécessaire
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
}
export default App;
