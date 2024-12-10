'use client'
import React, { useState, useEffect } from "react";
import '../estilos/cards.css';
export  function ModalLayout({ children }) {
  return ( <div className="modal-overlay"> <div className="modalcontent"> {children} </div> </div> ); }

  
  
const RandomPokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para obtener un Pokémon aleatorio
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Hay 898 Pokémon en la Pokédex
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setPokemon({
        name: data.name,
        id: data.id,
        sprite: data.sprites.front_default,
        types: data.types.map((typeInfo) => typeInfo.type.name),
      });
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  // Obtener un Pokémon al montar el componente
  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      {pokemon ? (
        <div className="card">
          <img src={pokemon.sprite} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>ID: {pokemon.id}</p>
          <button onClick={() => setIsModalOpen(true)}>Saber más</button>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setIsModalOpen(false)}>
                  &times;
                </span>
                <h2>{pokemon.name}</h2>
                <p>ID: {pokemon.id}</p>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p>Tipos: {pokemon.types.join(", ")}</p>
              </div>
            </div>
          )}
          
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
      
      





      {/* <style jsx>{`
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          width: 200px;
          margin: 20px auto;
        }
        .card img {
          width: 100px;
          height: 100px;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          width: 300px;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style> */}
    </div>
    
  );
};

export default RandomPokemonCard;
