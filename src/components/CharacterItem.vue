<template>
    <div class="flex h-32 w-full mb-4 p-2 border bg-amber-50">
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
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import Character from '@/models/CharacterModel';
const props = defineProps({
    item: { type: Object as PropType<Character>, default: () => { return {} } }
})
</script>