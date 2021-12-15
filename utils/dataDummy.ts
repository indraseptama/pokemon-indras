import { IPokemon } from "../interface/IPokemon";
import { IPokemonItem } from "../interface/IPokemonItem";

export const dataDummyPokemon: IPokemon = {
  name: "ivysaur",
  id: 2,
  stats: [
    {
      base_stat: 60,
      stat: {
        name: "hp",
      },
    },
    {
      base_stat: 62,
      stat: {
        name: "attack",
      },
    },
    {
      base_stat: 63,
      stat: {
        name: "defense",
      },
    },
    {
      base_stat: 80,
      stat: {
        name: "special-attack",
      },
    },
    {
      base_stat: 80,
      stat: {
        name: "special-defense",
      },
    },
    {
      base_stat: 60,
      stat: {
        name: "speed",
      },
    },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  types: [
    {
      type: {
        name: "grass",
      },
    },
    {
      type: {
        name: "poison",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "overgrow",
      },
    },
    {
      ability: {
        name: "chlorophyll",
      },
    },
  ],
  moves: [
    {
      move: {
        name: "swords-dance",
      },
    },
    {
      move: {
        name: "cut",
      },
    },
    {
      move: {
        name: "bind",
      },
    },
    {
      move: {
        name: "vine-whip",
      },
    },
    {
      move: {
        name: "headbutt",
      },
    },
    {
      move: {
        name: "tackle",
      },
    },
    {
      move: {
        name: "body-slam",
      },
    },
    {
      move: {
        name: "take-down",
      },
    },
    {
      move: {
        name: "double-edge",
      },
    },
    {
      move: {
        name: "growl",
      },
    },
    {
      move: {
        name: "strength",
      },
    },
    {
      move: {
        name: "mega-drain",
      },
    },
    {
      move: {
        name: "leech-seed",
      },
    },
    {
      move: {
        name: "growth",
      },
    },
    {
      move: {
        name: "razor-leaf",
      },
    },
    {
      move: {
        name: "solar-beam",
      },
    },
    {
      move: {
        name: "poison-powder",
      },
    },
    {
      move: {
        name: "sleep-powder",
      },
    },
    {
      move: {
        name: "string-shot",
      },
    },
    {
      move: {
        name: "toxic",
      },
    },
    {
      move: {
        name: "rage",
      },
    },
    {
      move: {
        name: "mimic",
      },
    },
    {
      move: {
        name: "double-team",
      },
    },
    {
      move: {
        name: "defense-curl",
      },
    },
    {
      move: {
        name: "light-screen",
      },
    },
    {
      move: {
        name: "reflect",
      },
    },
    {
      move: {
        name: "bide",
      },
    },
    {
      move: {
        name: "flash",
      },
    },
    {
      move: {
        name: "rest",
      },
    },
    {
      move: {
        name: "substitute",
      },
    },
    {
      move: {
        name: "snore",
      },
    },
    {
      move: {
        name: "curse",
      },
    },
    {
      move: {
        name: "protect",
      },
    },
    {
      move: {
        name: "sludge-bomb",
      },
    },
    {
      move: {
        name: "mud-slap",
      },
    },
    {
      move: {
        name: "giga-drain",
      },
    },
    {
      move: {
        name: "endure",
      },
    },
    {
      move: {
        name: "swagger",
      },
    },
    {
      move: {
        name: "fury-cutter",
      },
    },
    {
      move: {
        name: "attract",
      },
    },
    {
      move: {
        name: "sleep-talk",
      },
    },
    {
      move: {
        name: "return",
      },
    },
    {
      move: {
        name: "frustration",
      },
    },
    {
      move: {
        name: "safeguard",
      },
    },
    {
      move: {
        name: "sweet-scent",
      },
    },
    {
      move: {
        name: "synthesis",
      },
    },
    {
      move: {
        name: "hidden-power",
      },
    },
    {
      move: {
        name: "sunny-day",
      },
    },
    {
      move: {
        name: "rock-smash",
      },
    },
    {
      move: {
        name: "facade",
      },
    },
    {
      move: {
        name: "nature-power",
      },
    },
    {
      move: {
        name: "knock-off",
      },
    },
    {
      move: {
        name: "secret-power",
      },
    },
    {
      move: {
        name: "bullet-seed",
      },
    },
    {
      move: {
        name: "natural-gift",
      },
    },
    {
      move: {
        name: "worry-seed",
      },
    },
    {
      move: {
        name: "seed-bomb",
      },
    },
    {
      move: {
        name: "energy-ball",
      },
    },
    {
      move: {
        name: "captivate",
      },
    },
    {
      move: {
        name: "grass-knot",
      },
    },
    {
      move: {
        name: "venoshock",
      },
    },
    {
      move: {
        name: "round",
      },
    },
    {
      move: {
        name: "echoed-voice",
      },
    },
    {
      move: {
        name: "grass-pledge",
      },
    },
    {
      move: {
        name: "work-up",
      },
    },
    {
      move: {
        name: "confide",
      },
    },
  ],
};

const dataDummyList: Array<IPokemonItem> = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    id: 1,
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id: 2,
  },
  {
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    id: 3,
  },
  {
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    id: 4,
  },
  {
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    id: 5,
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    id: 6,
  },
  {
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    id: 7,
  },
  {
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    id: 8,
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    id: 9,
  },
  {
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    id: 10,
  },
  {
    name: "metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    id: 11,
  },
  {
    name: "butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    id: 12,
  },
];
