<template>
  <div class="px-2 flex justify-center flex-col lg:justify-around md:flex-row md:gap-10 gap-5">
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

onMounted(async () => {
  await setListResult();
})
</script>
