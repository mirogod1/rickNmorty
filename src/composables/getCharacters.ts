import CharacterListModel from "@/models/CharacterListModel";
import { ref, toRaw } from "vue";
const characters = ref<CharacterListModel>();
const error = ref(null);
const getCharacters = () => {
  const load = async (url = "https://rickandmortyapi.com/api/character/?page=1") => {
    try {
      const data = await fetch(url);
      if(!data.ok){
        throw Error("error");
      }
      data.json().then(jsonData => {
        characters.value = jsonData;
      })
    }
    catch(e: any){
      error.value = e.message
    }
  };
  return { characters, error, load };
};

export default getCharacters;
