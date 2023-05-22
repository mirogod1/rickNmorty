import { defineStore } from "pinia";
import CharacterListModel from "@/models/CharacterListModel";

export const useCharactersListStorage = defineStore("CharactersListStorage", {
  state: () => {
    return {
      charactersList: {} as CharacterListModel,
      error: ""
    }
  },
  actions: {
    async setListResult(url = "https://rickandmortyapi.com/api/character/?page=1") {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          throw Error("error");
        }
        data.json().then(jsonData => {
          this.charactersList = jsonData || {} as CharacterListModel;
        })
      }
      catch (e: any) {
        this.error = e.message
      }
    }
  }
});