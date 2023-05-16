<template>
  <h1>Rick and Morty Characters</h1>
  <ul>
    <li v-for="item in characters" :key="item.id">
      {{ item.name }} {{ item.species }} {{ item.status }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import Character from "@/models/CharacterModel";
import getCharacters from "@/composables/getCharacters";
const { characters, error, load } = getCharacters();
load();
</script>
