import {
  render,
  waitFor,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import PokemonList from "../view";
import { GET_POKEMONS } from "../../../graphql/pokemon-query";
import { dataDummyList } from "../../../utils/dataDummy";
import "@testing-library/jest-dom";
import { PokemonContext } from "../../../context/PokemonContext";
import { ChakraProvider } from "@chakra-ui/react";
const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 12,
        offset: 0,
      },
    },
    result: {
      data: {
        pokemons: {
          results: dataDummyList,
        },
      },
    },
  },
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 12,
        offset: 12,
      },
    },
    result: {
      data: {
        pokemons: {
          results: dataDummyList,
        },
      },
    },
  },
];

const mocksError = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 12,
        offset: 0,
      },
    },
    result: {
      errors: [
        {
          message:
            'Cannot query field "pokemonsssd" on type "Query". Did you mean "pokemons" or "pokemon"?',
          locations: [
            {
              line: 2,
              column: 3,
            },
          ],
          extensions: {
            code: "GRAPHQL_VALIDATION_FAILED",
          },
        },
      ],
    },
  },
];

it("renders without error", async () => {
  const countPokemons = 12;
  const { getByText } = render(
    <PokemonContext.Provider value={{ countPokemons }}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonList />
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Load More"));

  expect(getByText("ivysaur")).toBeInTheDocument();
  expect(getByText("You have 12 pokemons")).toBeInTheDocument();
});

it("renders wit error", async () => {
  const countPokemons = 12;
  const { getByText } = render(
    <PokemonContext.Provider value={countPokemons}>
      <MockedProvider mocks={mocksError} addTypename={false}>
        <ChakraProvider>
          <PokemonList />
        </ChakraProvider>
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Load More"));

  expect(getByText("fetching error")).toBeInTheDocument();
});

it("renders without error and load more", async () => {
  const countPokemons = 0;
  const { getByText } = render(
    <PokemonContext.Provider value={{ countPokemons }}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonList />
      </MockedProvider>
    </PokemonContext.Provider>
  );
  await waitFor(() => screen.getByText("Load More"));
  fireEvent.click(screen.getByText("Load More"));
  expect(getByText("ivysaur")).toBeInTheDocument();
  expect(getByText("You have 0 pokemon")).toBeInTheDocument();
});
