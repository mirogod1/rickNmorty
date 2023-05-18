<template>
  <div class="flex-col flex directionw-1/5 border-2 border-black-600 p-4 max-h-44 bg-teal-50">
    <h3 class="text-xl mb-2">Search</h3>
    <div>
      <input
        class="border-b-2 border-black-600 w-full mb-2"
        type="text"
        placeholder="search by name" />
    </div>
    <div class="mb-5">
      <select name="status" class="border-b-2 border-black-600 w-full">
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <button class="w-2/5 bg-sky-500 text-slate-200 rounded">Reset</button>
  </div>
</template>
<script lang="ts" setup></script>
