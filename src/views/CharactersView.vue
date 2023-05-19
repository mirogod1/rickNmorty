<template>
  <div class="flex justify-center gap-5 px-24">
    <SearchBox></SearchBox>
    <CharacterList></CharacterList>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import CharacterList from "@/components/CharacterList.vue";
import SearchBox from "@/components/SearchBox.vue";
import { useCharactersListStorage } from "@/stores/CharactersListStorage";

const characterStore = useCharactersListStorage();
const { setListResult } = characterStore;

onMounted(() => {
  setListResult();
})
</script>
