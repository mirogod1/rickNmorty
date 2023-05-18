<template>
  <div class="flex-col flex directionw-1/5 border-2 border-black-600 p-4">
    <h3 class="text-xl">Search</h3>
    <div>
      <input
        class="border-b-2 border-black-600 w-full"
        type="text"
        placeholder="search by name"
      /><input />
    </div>
    <div class="mb-2">
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
