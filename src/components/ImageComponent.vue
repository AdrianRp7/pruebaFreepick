<script setup lang="ts">
import type {Image} from "@/classes/Image";
import { ref, watch } from "vue";
import {useStore} from "@/stores/store";
const props = defineProps<{
  element: Image
}>();

const store = useStore();

</script>
<template>
  <div class="mo-ImageElementComponent flex items-center justify-center h-full w-full" :style="{backgroundImage: `url(${element.backgroundUrl})`}">
  </div>
</template>

<style scoped>
  .mo-ImageElementComponent {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
