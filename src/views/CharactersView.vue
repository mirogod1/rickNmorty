<template>
  <div class="flex justify-center gap-5 px-24">
    <SearchBox></SearchBox>
    <CharacterList :charactersList="charactersList"></CharacterList>
  </div>
</template>
<script lang="ts" setup>
import Character from "@/models/CharacterModel";
import { computed } from "vue";
import CharacterList from "@/components/CharacterList.vue";
import SearchBox from "@/components/SearchBox.vue";
import getCharacters from "@/composables/getCharacters";
const { characters, error, load } = getCharacters();
load();

const charactersList = computed(() => {
  return characters.value;
});
</script>
