import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import PokemonDetail from "../view";
import { GET_POKEMON_DETAIL } from "../../../graphql/pokemon-query";
import { dataDummyPokemon } from "../../../utils/dataDummy";
import "@testing-library/jest-dom";
import { PokemonContext } from "../../../context/PokemonContext";
const mocks = [
  {
    request: {
      query: GET_POKEMON_DETAIL,
      variables: {
        name: "ivysaur",
      },
    },
    result: {
      data: {
        pokemon: dataDummyPokemon,
      },
    },
  },
];

const mocksError = [
  {
    request: {
      query: GET_POKEMON_DETAIL,
      variables: {
        name: "ivysaur",
      },
    },
    result: {
      data: {
        pokemon: { ...dataDummyPokemon, name: null },
      },
    },
  },
];

it("renders without error", async () => {
  const addPokemon = jest.fn();
  const { getByText } = render(
    <PokemonContext.Provider value={addPokemon}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail name={"ivysaur"} />
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Skills"));
  expect(getByText("ivysaur")).toBeInTheDocument();
});

it("renders loading", () => {
  const addPokemon = jest.fn();
  const { getByText } = render(
    <PokemonContext.Provider value={addPokemon}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail name={"ivysaur"} />
      </MockedProvider>
    </PokemonContext.Provider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
});

it("renders modal pop up", async () => {
  const addPokemon = jest.fn();
  const { getByText } = render(
    <PokemonContext.Provider value={addPokemon}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail name={"ivysaur"} />
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Skills"));
  const button = getByText("Catch!");
  fireEvent.click(button);
  await waitFor(() => screen.getAllByRole("dialog"));
  //expect(getByText("ivysaur")).toBeInTheDocument();
});

it("renders with error", async () => {
  const addPokemon = jest.fn();
  const { getByText } = render(
    <PokemonContext.Provider value={addPokemon}>
      <MockedProvider mocks={mocksError} addTypename={false}>
        <PokemonDetail name={"ivysaur"} />
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Pokemon not found :("));
  expect(getByText("Pokemon not found :(")).toBeInTheDocument();
});
