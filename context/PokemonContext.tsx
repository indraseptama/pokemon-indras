import { createContext, useEffect, useState } from "react";
import { IPokemon } from "../interface/IPokemon";

export const PokemonContext = createContext(null);

export const PokemonProvider = (props) => {
  const [myPokemons, setMyPokemons] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    const myPokemonsData: Array<IPokemon> = JSON.parse(
      localStorage.getItem("myPokemons")
    );

    if (myPokemonsData) {
      setMyPokemons(myPokemonsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myPokemons", JSON.stringify(myPokemons));
  }, [myPokemons]);

  const addPokemon = (pokemon: IPokemon): boolean => {
    if (myPokemons.find((item) => item.nickname === pokemon.nickname)) {
      return false;
    }
    setMyPokemons((prevItems) => [...prevItems, pokemon]);
    return true;
  };

  const removePokemon = (nickname: string): boolean => {
    if (myPokemons.find((item) => item.nickname === nickname)) {
      setMyPokemons((prevItems) =>
        prevItems.filter((item) => item.nickname != nickname)
      );
      return true;
    }
    return false;
  };

  const countPokemons = myPokemons.length;

  return (
    <PokemonContext.Provider
      value={{ myPokemons, addPokemon, removePokemon, countPokemons }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
