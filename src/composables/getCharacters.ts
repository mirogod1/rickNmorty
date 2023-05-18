import { ref, toRaw } from "vue";
const characters = ref([]);
const error = ref(null);
const getCharacters = () => {
  const load = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const test = await data.json();
      characters.value = test.results;
      console.log(characters.value);
  };
  return { characters, error, load };
};

export default getCharacters;
