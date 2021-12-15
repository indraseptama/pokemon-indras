import { render, waitFor, screen, act } from "@testing-library/react";

import MyPokemonList from "../view";
import { dummyMyPokemons } from "../../../utils/dataDummy";
import "@testing-library/jest-dom";
import { PokemonContext } from "../../../context/PokemonContext";

it("renders without error", async () => {
  const countPokemons = 12;
  const myPokemons = dummyMyPokemons;
  const removePokemon = jest.fn();
  const { getByText } = render(
    <PokemonContext.Provider
      value={{ countPokemons, myPokemons, removePokemon }}
    >
      <MyPokemonList />
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("You have 12 pokemons"));
  expect(getByText("charmander")).toBeInTheDocument();
});
