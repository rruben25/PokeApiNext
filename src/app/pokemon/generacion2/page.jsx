'use client'
// import '@/app/estilos/card.css'
import { useState, useEffect } from "react";
import setIsModalOpen from '@/app/componentes/cards'
const RandomPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        // Generar 10 IDs aleatorios entre 1 y 1010 (total de pokémon actuales)
        const randomIds = Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * 1010) + 1
        );

        // Obtener datos de los pokémon aleatorios
        const responses = await Promise.all(
          randomIds.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
              res.json()
            )
          )
        );

        setPokemons(responses);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <img src="https://media.tenor.com/XasjKGMk_wAAAAAM/load-loading.gif" alt="imagenloading2"/> ;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Random Pokémon</h1>
      <div style={styles.cardContainer}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} style={styles.card}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={styles.image}
            />
            <h3 style={styles.name}>{pokemon.name}</h3>
            <p>
              <strong>ID:</strong> {pokemon.id}
            </p>
            <p>
              <strong>Salud (HP):</strong>{" "}
              {pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat}
            </p>
            <button onClick={() => setIsModalOpen(true)}>Saber más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: "20px",
  },
   card: {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
},
  image: {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  name: {
    textTransform: "capitalize",
    fontSize: "18px",
    margin: "10px 0",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default RandomPokemons;
