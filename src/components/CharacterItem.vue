<template>
    <RouterLink :to="{ name: `SingleCharacter`, params: { id: item.id } }" class="w-full mb-4">
        <div class="flex h-36 w-full p-2 border bg-amber-50">
            <img :src="item.image" :alt="item.name" class="mr-3">
            <ul>
                <li>
                    Name:
                    <h2 class="text-2xl">
                        {{ item.name }}
                    </h2>
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
    </RouterLink>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import Character from '@/models/CharacterModel';
const props = defineProps({
    item: { type: Object as PropType<Character>, default: () => { return {} } }
})
</script>