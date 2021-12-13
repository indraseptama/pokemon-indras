import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
        id
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      stats {
        base_stat
        stat {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      abilities {
        is_hidden
        slot
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
