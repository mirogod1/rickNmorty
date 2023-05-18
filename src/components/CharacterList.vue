<template>
  <div class="w-4/5 border-2 border-black-800 p-4 bg-teal-50">
    <h3 class="text-xl">Characters list</h3>
    <div v-if="charactersList.length > 0">
      <div v-for="item in charactersList" :key="item.id" class="flex">
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
import Character from "@/models/CharacterModel";
import { PropType } from "vue";
const props = defineProps({
  charactersList: { type: Array as PropType<Character[]>, default: () => { return Array<Character>() } },
});
</script>
