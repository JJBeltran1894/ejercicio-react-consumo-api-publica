import { useState } from "react";
import { useEffect } from "react";
import PersonajeCard from "./components/PersonajeCard";
import "./App.css";

function App() {
  const [simpsons, setSimpsons] = useState([]);
  useEffect(() => {
    const obtenerSimpsons = async () => {
      try {
        const response = await fetch(
          "https://thesimpsonsapi.com/api/characters?page=1",
        );
        const datos = await response.json();
        setSimpsons(datos.results);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };
    obtenerSimpsons();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">The Simpsons API</h1>
      </header>

      <div className="grid-container">
        {simpsons.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}

export default App;
