import { defineStore } from "pinia";

export const useSearchStore = defineStore("SearchStore", {
    state: () => {
        return {
            name: "",
            status: ""
        }
    },
    actions: {
        setFilter(name: string, status: string) {
            this.name = name;
            this.status = status;
        }
    }
});