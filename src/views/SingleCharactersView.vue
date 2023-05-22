<template>
  <div class="p-2 md:px-24">
    <button @click="$router.go(-1)" class="w-full sm:w-1/5 h-20 bg-sky-500 text-slate-200 rounded mb-5">
      <ChevronLeftIcon class="h-6 w-6 float-left" aria-hidden="true" />
      Back
    </button>

    <div class="flex flex-col md:flex-row md:justify-around gap-5 " v-if="character">
      <img :src="character.image">
      <div class="w-4/5">
        <h1 class="text-4xl">
          {{ character.name }}
        </h1>
        <ul>
          <li>
            species: {{ character.species }}
          </li>
          <li>
            gender: {{ character.gender }}
          </li>
          <li>
            origin location: {{ character.origin?.name || 'unknonw' }}
          </li>
          <li>
            last known Location: {{ character.location?.name || 'unknown' }}
          </li>
          <li>
            type: {{ character.type || 'unknown' }}
          </li>
          <li>
            status: {{ character.status }}
          </li>
          <li v-if="episodes?.length > 0">

            <h3 class="text-xl">Appeared in episode:</h3>
            <a :href="ep.url" v-for="ep in episodes" :key="ep.epNum">[{{ ep.epNum }}]</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { useSingleCharactersStore } from '@/stores/SingleCharacterStore';
import { storeToRefs } from 'pinia';
import { onMounted, computed } from 'vue';
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  id: { type: Number, default: () => { return 2 } }
})
const singleCharacterStore = useSingleCharactersStore();
const { setCharacter } = singleCharacterStore;
const { character, error } = storeToRefs(singleCharacterStore);

const episodes = computed(() => {
  console.log(character.value);

  return character.value.episode?.map(x => {
    const epNumList = x.split('/')
    return { epNum: epNumList[epNumList.length - 1], url: x }
  })
})

onMounted(() => {
  setCharacter(props.id);
})

</script>
