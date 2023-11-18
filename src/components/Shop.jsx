import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/CartSlice';
function Shop() {
  const [pokemonData, setPokemonData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const itemsPerPage = 20; 
  const [paginationData, setPaginationData] = useState({
    count: 0,
    next: '',
    previous: '',
  });
  const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [pokeMon,setPokeMon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (id - 1) * itemsPerPage;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsPerPage}`);
        const results = response.data.results;
        const detailPromises = results.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url);
          return detailResponse.data;
        });
        const pokemonDetails = await Promise.all(detailPromises);
        setPokemonData(pokemonDetails);
        setPaginationData({
          count: response.data.count,
          next: response.data.next,
          previous: response.data.previous,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
const handleAddToCart = (index) => {
  if (index !== undefined && pokemonData[index]) {
    const pokemon = pokemonData[index];

    const product = {
      price: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.front_default,
    };
      dispatch(addToCart(product));
      setQuantity(1);                   //////
        const json = JSON.stringify(updatedCart);
      localStorage.setItem("cartItems", json);
    } 
   
  };
  const handlePageChange = (selectedPage) => {
    const newPageNumber = selectedPage.selected + 1;
    const url = `/shop/${newPageNumber}`;
  
    if (url) {
      navigate(url);
    }
  };

 

  return (
    <div className='flex flex-col gap-4 pb-24 mb-8 border-b-2  '>
      <h1 className='flex justify-center text-3xl font-bold pt-28'>SHOP</h1>
      <div className='flex justify-center'>
      <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 p-2 '>
  {
    pokemonData.map((pokemon, index) => (
      <div className='border-[1px] justify-center w-36  flex flex-col gap-2 sm:w-52 p-4 text-center ' key={index}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2 className='uppercase font-bold h-16 sm:h-12' >{pokemon.name}</h2>
        <p className='text-xs flex flex-col font-light justify-center gap-2'>
          <div className='font-light ml-2 '> <div className='bg-blue-50'>{pokemon.types.map((type) => type.type.name).join(' , ')}</div> </div>
        </p>
        <p>$ {pokemon.id}.00</p>
        <button   onClick={() => handleAddToCart(index)}
                  className='border-[1px] border-black hover:bg-black hover:text-white'>
                  Add to cart
        </button>
      </div>
    )) 
  }
</div>


      </div>
      <ReactPaginate  className="flex justify-center mt-8 "
        pageCount={Math.ceil(paginationData.count / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={''}
        activeClassName={'bg-blue-500'}
        activeLinkClassName={'bg-blue-500 hover:bg-blue-500'}
        nextLabel={'>'}
        previousLabel={'<'}
        breakLabel={"..."}
        nextLinkClassName={'flex items-center justify-center px-3 h-8 w-[36px] text-gray-500 bg-white border-l-0 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'}
        previousLinkClassName={'flex items-center justify-center px-3 w-[36px] h-8  text-gray-500 bg-white border  border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'}
        pageLinkClassName={'flex items-center justify-center px-3 h-8 text-gray-500  bg-white border border-l-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700'}
        breakLinkClassName={'flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-l-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700'}
        
      />
    </div>
  );
}

export default Shop;
