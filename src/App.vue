<script setup lang="ts">
import {ref, onMounted, onDeactivated} from "vue";
import {useStore} from "@/stores/store";
import Element from "@/components/ElementComponent.vue";
import PanelColors from "@/components/PanelColors.vue";
import PanelSearchImage from "@/components/PanelSearchImage.vue";
import {useTransformManager} from "@/composables/useTransformManager";
import {ElementTypes} from "@/types";
import AddImage from "@/components/Addimage.vue";

const store = useStore();
useTransformManager();

const canvasHeight = ref<String>(store.canvas?.size.height);
const canvasWidth = ref<String>(store.canvas?.size.width);
const canvasBackground= ref<String>(store.canvas?.backgroundColor);

function controlKeyPressed(event: KeyboardEvent) {
  if(document?.activeElement?.tagName.toLocaleLowerCase() !== "input") {
    console.log(event.key)
    if (event.key === 'Delete') {
      store.deleteActualItem();
    }
    if (event.ctrlKey && event.key.toLowerCase() === 'x') {
      store.cutActualElement();
    }
    if(event.ctrlKey && event.key.toLowerCase() === 'c') {
      store.saveActualItem();
    }
    if(event.ctrlKey && event.key.toLowerCase() === 'v') {
      store.pushClipboardElement();
    }
  }
}

onMounted(() => {
  window.addEventListener("keydown", controlKeyPressed);
})


onDeactivated(() => {
  window.removeEventListener("keydown", controlKeyPressed);
})

</script>

<template>
  <div class="flex flex-col align-center justify-center h-full bg-gray-200">
    <div class="mt-8 flex items-end justify-center gap-x-6">
      <div>
        <h2 class="font-bold mb-2">Canvas actions</h2>
        <div class="mo-CanvasMain flex gap-x-2">
          <div>
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Width</label>
            <input
                v-model="canvasWidth"
                type="text"
                id="image"
                name="image"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter term to search"
                @input="store.setSize({width: canvasWidth, height: canvasHeight})"
            />
          </div>
          <div>
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Height</label>
            <input
                v-model="canvasHeight"
                type="text"
                id="image"
                name="image"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter term to search"
                @input="store.setSize({width: canvasWidth, height: canvasHeight})"
            />
          </div>
          <div>
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Background Color</label>
            <input
                v-model="canvasBackground"
                type="text"
                id="image"
                name="image"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter term to search"
                @input="store.setBackgroundColor(canvasBackground)"
            />
          </div>
      </div>
      </div>
      <div class="h-4/4">
        <div class="mo-OperationsMain flex gap-x-2">
          <button class="p-2 rounded border border-blue-500" @click="store.addElement(ElementTypes.Text)">Add Text</button>
          <AddImage />
          <PanelSearchImage></PanelSearchImage>
        </div>
      </div>
      <div class="optionsElement">
      </div>
    </div>
    <div class= "mt-3 flex">
      <div class="mb-auto mx-auto p-2">
        <PanelColors />
      </div>
      <div class="">
        <div id="mo-CanvasContainer" class="m-auto relative bg-blue-300"  :style="{backgroundColor: store.canvas.backgroundColor, width: `${store.canvas.size.width}px`, height: `${store.canvas.size.height}px`}">
          <Element v-for="element in store.canvas.elements" :key="element.id" :element="element" />
        </div>
      </div>
      <div class="m-auto">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>