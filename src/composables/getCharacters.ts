import { ref, toRaw } from "vue";
const characters = ref([]);
const error = ref(null);
const getCharacters = () => {
  const load = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      if(!data.ok){
        throw Error("error");
      }
      data.json().then(jsonData => {
        characters.value = jsonData.results;
      })
    }
    catch(e: any){
      error.value = e.message
    }
  };
  return { characters, error, load };
};

export default getCharacters;
