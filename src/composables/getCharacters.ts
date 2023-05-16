import Character from "@/models/CharacterModel";
import { ref } from "vue";
const getCharacters = () => {
  const characters = ref(Array<Character>());
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      if (!data.ok) {
        throw Error("no data found");
      }
      characters.value = (await data.json()).results;
      console.log(characters.value);
    } catch (e: unknown) {
      console.log(e);
    }
  };
  return { characters, error, load };
};

export default getCharacters;
