/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from "react";
import { useState, useEffect } from "react";
import Layout from "component/Layout";
import Card from "component/Card";
import axios from "axios";
import { WithRouter } from "utils/Navigation";
const Home = (props) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <Layout>
        <div className="px-[4rem] my-[3rem] ">
          <h1 className=" text-secodary-100 text-4xl font-bold">Pokedex</h1>
          <p className="text-primary-40">lets catch!</p>
        </div>
        <section className=" px-7 mt-4">
          <div className="flex flex-wrap justify-center items-center gap-y-6 gap-4">
            {pokeData.map((pokemon, index) => (
              <Card
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                onNavigate={() => props.navigate(`/detail/${pokemon.name}`)}
                type={pokemon.types[0].type.name}
              />
            ))}
            ;
          </div>
          <div className="px-9 mb-[5rem] mt-6 ">
            {prevUrl && (
              <button
                className="btn text-base "
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="btn text-base ml-4"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithRouter(Home);
