import {
  render,
  waitFor,
  screen,
  act,
  getAllByText,
  fireEvent,
} from "@testing-library/react";

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

it("renders pop up modal", async () => {
  const countPokemons = 12;
  const myPokemons = dummyMyPokemons;
  const removePokemon = jest.fn();
  const { container, getByText } = render(
    <PokemonContext.Provider
      value={{ countPokemons, myPokemons, removePokemon }}
    >
      <MyPokemonList />
    </PokemonContext.Provider>
  );

  await waitFor(() => screen.getByText("You have 12 pokemons"));
  const buttonRelease = getAllByText(container, "Release");
  fireEvent.click(buttonRelease[0]);
  expect(getByText("Are you sure to release Hellow?")).toBeInTheDocument();
  const buttonRemove = getByText("Remove");
  fireEvent.click(buttonRemove);
  fireEvent.click(buttonRelease[0]);
  const buttonCancel = getByText("Cancel");
  fireEvent.click(buttonCancel);
  fireEvent.click(buttonRelease[0]);
  fireEvent.keyDown(window, { key: "Escape", code: "Escape" });
  expect(getByText("charmander")).toBeInTheDocument();
});
