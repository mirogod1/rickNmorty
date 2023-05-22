import { Location } from "./LocationModel";

export default interface Character {
  id: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  image: string;
  type: string;
  created: string;
  episode: Array<string>;
  location: Location;
  origin: Location;
}
