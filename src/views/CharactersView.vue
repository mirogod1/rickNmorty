<template>
  <div class="flex justify-center gap-5 px-24">
    <SearchBox></SearchBox>
    <CharacterList></CharacterList>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, toRaw } from "vue";
import CharacterList from "@/components/CharacterList.vue";
import SearchBox from "@/components/SearchBox.vue";
import { useSearchStore } from "@/stores/SearchStorage";
import { useCharactersListStorage } from "@/stores/CharactersListStorage";
import { storeToRefs } from 'pinia';

const searchStore = useSearchStore();
const characterStore = useCharactersListStorage();
const { name, status } = storeToRefs(searchStore);
const { setListResult } = characterStore;
const { charactersList, error } = storeToRefs(characterStore)

onMounted(() => {
  setListResult();
})
</script>
