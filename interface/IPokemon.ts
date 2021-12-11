import { IAbilty } from "./IAbilty";
import { IMove } from "./IMove";
import { ISpirites } from "./ISpirites";
import { IStat } from "./IStat";
import { IType } from "./IType";

export interface IPokemon {
  name?: string;
  id?: number;
  stats?: Array<IStat>;
  sprites?: ISpirites;
  types?: Array<IType>;
  abilities?: Array<IAbilty>;
  moves?: Array<IMove>;
}
