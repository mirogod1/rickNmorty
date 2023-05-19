<template>
  <div class="flex-col flex directionw-1/5 w-52">
    <div class="sticky top-2">
      <div class="bg-teal-50 border-2 border-black-600 p-4 max-h-44 mb-5">
        <h3 class="text-xl mb-2">Search</h3>
        <div>
          <input
            class="border-b-2 border-black-600 w-full mb-2"
            type="text"
            placeholder="search by name"
            v-model="nameSearch" />
        </div>
        <div class="mb-5">
          <select name="status" class="border-b-2 border-black-600 w-full" v-model="statusSearch">
            <option value="" class="text-slate-400" disabled selected>search by status</option>
            <option v-for="option in options" :key="option">{{ option }}</option>
          </select>
        </div>
        <button class="w-2/5 bg-sky-500 text-slate-200 rounded" @click="resetSearch()">Reset</button>
      </div>
      <p>page {{ pageNumber }} of {{ characterPageInfo?.pages }}</p>
      <button class="w-2/5 bg-sky-500 text-slate-200 rounded " v-if="characterPageInfo?.prev" @click="loadPage(characterPageInfo?.prev)">
        Back
        <ChevronLeftIcon class="h-6 w-6 float-left" aria-hidden="true" />
      </button>
      <button class="w-2/5 bg-sky-500 text-slate-200 rounded float-right" v-if="characterPageInfo?.next" @click="loadPage(characterPageInfo?.next)">
        <ChevronRightIcon class="h-6 w-6 float-right" aria-hidden="true" /> Next
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useSearchStore } from '@/stores/SearchStorage';
import { useCharactersListStorage } from '@/stores/CharactersListStorage';
import { storeToRefs } from 'pinia';
import { ChevronLeftIcon, ChevronRightIcon, FingerPrintIcon } from '@heroicons/vue/20/solid';

const nameSearch = ref("");
const statusSearch = ref("");

const searchStore = useSearchStore();
const { setFilter } = searchStore;
const { name, status } = storeToRefs(searchStore);

const charactersListStore = useCharactersListStorage();
const { setListResult } = charactersListStore;
const { charactersList, error } = storeToRefs(charactersListStore);

watchEffect(() => {
  setFilter(name.value, status.value);
});
const resetSearch = () => {
  nameSearch.value = name.value = "";
  statusSearch.value = status.value = "";
}
const pageNumber = computed(() => {
  const t = new URLSearchParams(characterPageInfo?.value?.next?.split("?")[1]);
  console.log(t.get("page"));
  const sumPages = characterPageInfo?.value?.pages;
  return t?.get("page") ? Number(t.get("page")) - 1 : sumPages;
})
const loadPage = (url: any) => {
  setListResult(url);
}
const characterPageInfo = computed(() => {
  return charactersList?.value?.info;
})

const options = computed(() => {
  return Array.from(new Set(charactersList?.value.results?.map(x => x.status)));
})
</script>
