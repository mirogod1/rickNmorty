<template>
  <div class="w-4/5 border-2 border-black-800 p-4">
    <h3 class="text-xl">Characters list</h3>
    <div v-if="charactersList.length > 0">
      <div v-for="item in charactersList" :key="item.id" class="flex">
        <img :src="item.image" :alt="item.name" class="mr-3">
        <ul>
          <li>
            Name:
            <span class="text-2xl">
              {{ item.name }}
            </span>
          </li>
          <li>
            Gender: {{ item.gender }}
          </li>
          <li>
            Species: {{ item.species }}
          </li>
          <li>
            Status: {{ item.status }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      NO DATA
    </div>
  </div>
</template>
<script lang="ts" setup>

import Character from "@/models/CharacterModel";
import { PropType } from "vue";
const props = defineProps({
  charactersList: { type: Array as PropType<Character[]>, default: () => { return Array<Character>() } },
});
</script>
