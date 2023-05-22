import { defineStore } from "pinia";
import Character from "@/models/CharacterModel";

export const useSingleCharactersStore = defineStore("useSingleCharactersStore", {
    state: () => {
        return {
            character: {} as Character,
            error: ""
        }
    },
    actions: {
        async setCharacter(id: number) {
            try {
                const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!data.ok) {
                    throw Error("error");
                }
                data.json().then(jsonData => {
                    this.character = jsonData || {} as Character;
                })
            }
            catch (e: any) {
                this.error = e.message
            }
        }
    }
});