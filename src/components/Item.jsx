import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Item() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams(); 
      useEffect(() => {
        const fetchPokemonData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemonData(response.data);
          } catch (error) {
            console.error('Error fetching Pokemon data:', error);
          } finally {
            setLoading(false);
          }
        };  
        fetchPokemonData();

      }, [name]);
    console.log(pokemonData);
      return (
        <div>
          <h1>Pokemon Information</h1>
          {loading ? (
            <p>Loading...</p>
          ) : pokemonData ? (
            <div>
              <h2>{pokemonData.name}</h2>
              <img src={pokemonData?.sprites?.front_default} alt={pokemonData.name} />
              <p>Type: {pokemonData.type} decimetres</p>
            </div>
          ) : (
            <p>Pokemon not found</p>
          )}
        </div>
      );
    };
    
    export default Item;