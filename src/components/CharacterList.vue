<template>
  <div class="md:w-4/5 border-2 border-black-800 md:p-4 bg-teal-50">
    <h3 class="text-xl p-4 md:p-0">Characters list</h3>
    <div v-if="characters?.length > 0">
      <div v-for="item in characters" :key="item.id" class="flex">

        <CharacterItem :item="item"></CharacterItem>

      </div>
    </div>
    <div v-else>
      NO DATA
    </div>
  </div>
</template>
<script lang="ts" setup>
import CharacterItem from "./CharacterItem.vue";
import { computed } from "vue";
import { useCharactersListStorage } from "@/stores/CharactersListStorage";
import { storeToRefs } from "pinia";

const charactersListStore = useCharactersListStorage();

const { charactersList, error } = storeToRefs(charactersListStore);

const characters = computed(() => {
  return charactersList?.value.results;
});
</script>
