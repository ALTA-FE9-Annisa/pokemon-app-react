/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Layout from "component/Layout";
import React, { useEffect, useState } from "react";

import { WithRouter } from "utils/Navigation";
import { useFetchGet } from "utils/useFetchGet";

const DetailPoke = (props) => {
  const [loading, setLoading] = useState(true);
  const { pokemon_name } = props.params;
  const [poke] = useFetchGet(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  );
  console.log(poke);
  return (
    <Layout>
      <div className="px-9 mt-5 ">
        <div className="flex justify-end">
          <img
            className="h-[10rem]"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
            alt=""
          />
        </div>

        <div className="mt-[4rem]">
          <h2 className="font-semibold text-4xl text-secodary-200">
            {poke?.name}
          </h2>
          <div className="mb-[11rem]">
            <h3>Abilities</h3>
            {/* {poke &&
              poke.abilities.map((item) => {
                return <h2>{item.ability.name}</h2>;
              })} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(DetailPoke);
