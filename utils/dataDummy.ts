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

export const dataDummyList: Array<IPokemonItem> = [
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

export const dummyMyPokemons: Array<IPokemon> = [
  {
    name: "charmander",
    id: 4,
    stats: [
      {
        base_stat: 39,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 52,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 43,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 60,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 50,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 65,
        stat: {
          name: "speed",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "blaze",
        },
      },
      {
        ability: {
          name: "solar-power",
        },
      },
    ],
    moves: [
      {
        move: {
          name: "mega-punch",
        },
      },
      {
        move: {
          name: "fire-punch",
        },
      },
      {
        move: {
          name: "thunder-punch",
        },
      },
      {
        move: {
          name: "scratch",
        },
      },
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
          name: "mega-kick",
        },
      },
      {
        move: {
          name: "headbutt",
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
          name: "leer",
        },
      },
      {
        move: {
          name: "bite",
        },
      },
      {
        move: {
          name: "growl",
        },
      },
      {
        move: {
          name: "ember",
        },
      },
      {
        move: {
          name: "flamethrower",
        },
      },
      {
        move: {
          name: "submission",
        },
      },
      {
        move: {
          name: "counter",
        },
      },
      {
        move: {
          name: "seismic-toss",
        },
      },
      {
        move: {
          name: "strength",
        },
      },
      {
        move: {
          name: "dragon-rage",
        },
      },
      {
        move: {
          name: "fire-spin",
        },
      },
      {
        move: {
          name: "dig",
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
          name: "smokescreen",
        },
      },
      {
        move: {
          name: "defense-curl",
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
          name: "fire-blast",
        },
      },
      {
        move: {
          name: "swift",
        },
      },
      {
        move: {
          name: "skull-bash",
        },
      },
      {
        move: {
          name: "rest",
        },
      },
      {
        move: {
          name: "rock-slide",
        },
      },
      {
        move: {
          name: "slash",
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
          name: "scary-face",
        },
      },
      {
        move: {
          name: "belly-drum",
        },
      },
      {
        move: {
          name: "mud-slap",
        },
      },
      {
        move: {
          name: "outrage",
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
          name: "dynamic-punch",
        },
      },
      {
        move: {
          name: "dragon-breath",
        },
      },
      {
        move: {
          name: "iron-tail",
        },
      },
      {
        move: {
          name: "metal-claw",
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
          name: "crunch",
        },
      },
      {
        move: {
          name: "ancient-power",
        },
      },
      {
        move: {
          name: "rock-smash",
        },
      },
      {
        move: {
          name: "beat-up",
        },
      },
      {
        move: {
          name: "heat-wave",
        },
      },
      {
        move: {
          name: "will-o-wisp",
        },
      },
      {
        move: {
          name: "facade",
        },
      },
      {
        move: {
          name: "focus-punch",
        },
      },
      {
        move: {
          name: "brick-break",
        },
      },
      {
        move: {
          name: "secret-power",
        },
      },
      {
        move: {
          name: "air-cutter",
        },
      },
      {
        move: {
          name: "overheat",
        },
      },
      {
        move: {
          name: "rock-tomb",
        },
      },
      {
        move: {
          name: "aerial-ace",
        },
      },
      {
        move: {
          name: "dragon-claw",
        },
      },
      {
        move: {
          name: "dragon-dance",
        },
      },
      {
        move: {
          name: "natural-gift",
        },
      },
      {
        move: {
          name: "fling",
        },
      },
      {
        move: {
          name: "flare-blitz",
        },
      },
      {
        move: {
          name: "dragon-pulse",
        },
      },
      {
        move: {
          name: "dragon-rush",
        },
      },
      {
        move: {
          name: "shadow-claw",
        },
      },
      {
        move: {
          name: "fire-fang",
        },
      },
      {
        move: {
          name: "captivate",
        },
      },
      {
        move: {
          name: "hone-claws",
        },
      },
      {
        move: {
          name: "flame-burst",
        },
      },
      {
        move: {
          name: "flame-charge",
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
          name: "incinerate",
        },
      },
      {
        move: {
          name: "inferno",
        },
      },
      {
        move: {
          name: "fire-pledge",
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
      {
        move: {
          name: "power-up-punch",
        },
      },
    ],
    nickname: "Hellow",
  },
  {
    name: "charizard",
    id: 6,
    stats: [
      {
        base_stat: 78,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 84,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 78,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 109,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 85,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "speed",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
      {
        type: {
          name: "flying",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "blaze",
        },
      },
      {
        ability: {
          name: "solar-power",
        },
      },
    ],
    moves: [
      {
        move: {
          name: "mega-punch",
        },
      },
      {
        move: {
          name: "fire-punch",
        },
      },
      {
        move: {
          name: "thunder-punch",
        },
      },
      {
        move: {
          name: "scratch",
        },
      },
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
          name: "wing-attack",
        },
      },
      {
        move: {
          name: "fly",
        },
      },
      {
        move: {
          name: "mega-kick",
        },
      },
      {
        move: {
          name: "headbutt",
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
          name: "leer",
        },
      },
      {
        move: {
          name: "growl",
        },
      },
      {
        move: {
          name: "roar",
        },
      },
      {
        move: {
          name: "ember",
        },
      },
      {
        move: {
          name: "flamethrower",
        },
      },
      {
        move: {
          name: "hyper-beam",
        },
      },
      {
        move: {
          name: "submission",
        },
      },
      {
        move: {
          name: "counter",
        },
      },
      {
        move: {
          name: "seismic-toss",
        },
      },
      {
        move: {
          name: "strength",
        },
      },
      {
        move: {
          name: "solar-beam",
        },
      },
      {
        move: {
          name: "dragon-rage",
        },
      },
      {
        move: {
          name: "fire-spin",
        },
      },
      {
        move: {
          name: "earthquake",
        },
      },
      {
        move: {
          name: "fissure",
        },
      },
      {
        move: {
          name: "dig",
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
          name: "smokescreen",
        },
      },
      {
        move: {
          name: "defense-curl",
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
          name: "fire-blast",
        },
      },
      {
        move: {
          name: "swift",
        },
      },
      {
        move: {
          name: "skull-bash",
        },
      },
      {
        move: {
          name: "rest",
        },
      },
      {
        move: {
          name: "rock-slide",
        },
      },
      {
        move: {
          name: "slash",
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
          name: "scary-face",
        },
      },
      {
        move: {
          name: "mud-slap",
        },
      },
      {
        move: {
          name: "outrage",
        },
      },
      {
        move: {
          name: "sandstorm",
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
          name: "steel-wing",
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
          name: "dynamic-punch",
        },
      },
      {
        move: {
          name: "dragon-breath",
        },
      },
      {
        move: {
          name: "iron-tail",
        },
      },
      {
        move: {
          name: "metal-claw",
        },
      },
      {
        move: {
          name: "hidden-power",
        },
      },
      {
        move: {
          name: "twister",
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
          name: "heat-wave",
        },
      },
      {
        move: {
          name: "will-o-wisp",
        },
      },
      {
        move: {
          name: "facade",
        },
      },
      {
        move: {
          name: "focus-punch",
        },
      },
      {
        move: {
          name: "brick-break",
        },
      },
      {
        move: {
          name: "secret-power",
        },
      },
      {
        move: {
          name: "blast-burn",
        },
      },
      {
        move: {
          name: "air-cutter",
        },
      },
      {
        move: {
          name: "overheat",
        },
      },
      {
        move: {
          name: "rock-tomb",
        },
      },
      {
        move: {
          name: "aerial-ace",
        },
      },
      {
        move: {
          name: "dragon-claw",
        },
      },
      {
        move: {
          name: "roost",
        },
      },
      {
        move: {
          name: "natural-gift",
        },
      },
      {
        move: {
          name: "tailwind",
        },
      },
      {
        move: {
          name: "fling",
        },
      },
      {
        move: {
          name: "flare-blitz",
        },
      },
      {
        move: {
          name: "air-slash",
        },
      },
      {
        move: {
          name: "dragon-pulse",
        },
      },
      {
        move: {
          name: "focus-blast",
        },
      },
      {
        move: {
          name: "giga-impact",
        },
      },
      {
        move: {
          name: "shadow-claw",
        },
      },
      {
        move: {
          name: "fire-fang",
        },
      },
      {
        move: {
          name: "defog",
        },
      },
      {
        move: {
          name: "captivate",
        },
      },
      {
        move: {
          name: "ominous-wind",
        },
      },
      {
        move: {
          name: "hone-claws",
        },
      },
      {
        move: {
          name: "flame-burst",
        },
      },
      {
        move: {
          name: "flame-charge",
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
          name: "sky-drop",
        },
      },
      {
        move: {
          name: "incinerate",
        },
      },
      {
        move: {
          name: "inferno",
        },
      },
      {
        move: {
          name: "fire-pledge",
        },
      },
      {
        move: {
          name: "bulldoze",
        },
      },
      {
        move: {
          name: "dragon-tail",
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
      {
        move: {
          name: "power-up-punch",
        },
      },
      {
        move: {
          name: "brutal-swing",
        },
      },
    ],
    nickname: "test",
  },
  {
    name: "charmeleon",
    id: 5,
    stats: [
      {
        base_stat: 58,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 64,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 58,
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
        base_stat: 65,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 80,
        stat: {
          name: "speed",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "blaze",
        },
      },
      {
        ability: {
          name: "solar-power",
        },
      },
    ],
    moves: [
      {
        move: {
          name: "mega-punch",
        },
      },
      {
        move: {
          name: "fire-punch",
        },
      },
      {
        move: {
          name: "thunder-punch",
        },
      },
      {
        move: {
          name: "scratch",
        },
      },
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
          name: "mega-kick",
        },
      },
      {
        move: {
          name: "headbutt",
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
          name: "leer",
        },
      },
      {
        move: {
          name: "growl",
        },
      },
      {
        move: {
          name: "ember",
        },
      },
      {
        move: {
          name: "flamethrower",
        },
      },
      {
        move: {
          name: "submission",
        },
      },
      {
        move: {
          name: "counter",
        },
      },
      {
        move: {
          name: "seismic-toss",
        },
      },
      {
        move: {
          name: "strength",
        },
      },
      {
        move: {
          name: "dragon-rage",
        },
      },
      {
        move: {
          name: "fire-spin",
        },
      },
      {
        move: {
          name: "dig",
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
          name: "smokescreen",
        },
      },
      {
        move: {
          name: "defense-curl",
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
          name: "fire-blast",
        },
      },
      {
        move: {
          name: "swift",
        },
      },
      {
        move: {
          name: "skull-bash",
        },
      },
      {
        move: {
          name: "rest",
        },
      },
      {
        move: {
          name: "rock-slide",
        },
      },
      {
        move: {
          name: "slash",
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
          name: "scary-face",
        },
      },
      {
        move: {
          name: "mud-slap",
        },
      },
      {
        move: {
          name: "outrage",
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
          name: "dynamic-punch",
        },
      },
      {
        move: {
          name: "dragon-breath",
        },
      },
      {
        move: {
          name: "iron-tail",
        },
      },
      {
        move: {
          name: "metal-claw",
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
          name: "heat-wave",
        },
      },
      {
        move: {
          name: "will-o-wisp",
        },
      },
      {
        move: {
          name: "facade",
        },
      },
      {
        move: {
          name: "focus-punch",
        },
      },
      {
        move: {
          name: "brick-break",
        },
      },
      {
        move: {
          name: "secret-power",
        },
      },
      {
        move: {
          name: "overheat",
        },
      },
      {
        move: {
          name: "rock-tomb",
        },
      },
      {
        move: {
          name: "aerial-ace",
        },
      },
      {
        move: {
          name: "dragon-claw",
        },
      },
      {
        move: {
          name: "natural-gift",
        },
      },
      {
        move: {
          name: "fling",
        },
      },
      {
        move: {
          name: "dragon-pulse",
        },
      },
      {
        move: {
          name: "shadow-claw",
        },
      },
      {
        move: {
          name: "fire-fang",
        },
      },
      {
        move: {
          name: "captivate",
        },
      },
      {
        move: {
          name: "hone-claws",
        },
      },
      {
        move: {
          name: "flame-burst",
        },
      },
      {
        move: {
          name: "flame-charge",
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
          name: "incinerate",
        },
      },
      {
        move: {
          name: "inferno",
        },
      },
      {
        move: {
          name: "fire-pledge",
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
      {
        move: {
          name: "power-up-punch",
        },
      },
    ],
    nickname: "sd",
  },
];
