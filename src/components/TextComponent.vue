<script setup lang="ts">
import {Text} from "@/classes/Text";
import { ref, watch } from "vue";
import {useStore} from "@/stores/store";
const props = defineProps<{
  element: Text
}>();

const store = useStore();


const colorText = ref<String>(props.element.colorText);

watch(colorText, () => {
  store.modifyColorText(props.element, colorText.value);
})
</script>
<template>
  <div class="flex items-center justify-center h-full w-full" :style="{background: element.background, color: colorText}">
    {{element.content}}
  </div>
  <Teleport to=".optionsElement" v-if="store.activeElement?.id === element.id">
    <div class="">
      <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Change Color Text:</label>
      <input
          v-model.lazy="colorText"
          type="text"
          id="image"
          name="image"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter term to search"
          
      />
    </div>
  </Teleport>
</template>
