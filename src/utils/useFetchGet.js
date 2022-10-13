import { useEffect, useState } from "react";

export function useFetchGet(url) {
  const [loading, setLoading] = useState(true);
  const [Pokedata, setPokedata] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((Pokedata) => setPokedata(Pokedata));
  }, [url]);
  return [Pokedata];
}
