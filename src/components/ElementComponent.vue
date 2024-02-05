<script setup lang="ts">

import {computed} from "vue";
import {Element} from "@/classes/Element";
import {Text} from "@/classes/Text";
import {Image} from "@/classes/Image";
import TextComponent from "@/components/TextComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import {useStore} from "@/stores/store";

const props = defineProps<{
  element: Element
}>();

const store = useStore();

const componentToRender = computed(() => {
  if (props.element instanceof Text) {
    return TextComponent;
  } 
  else if(props.element instanceof Image) {
    return ImageComponent;
  }
  return null;
});

const transformElement = computed(() => `translate(${props.element.position.x}px, ${props.element.position.y}px) ${props.element.scale} ${props.element.rotate}`);

</script>
<template>
  <div
      :id="element.id"
      class="absolute"
      :class="{'target': store.activeElement?.id === element.id}"
      :style="{width: `${element.size.width}px`, height: `${element.size.height}px`, transform: transformElement}"
      @click="store.setActive(element);"
      tabindex="0"
  >
    <component :is="componentToRender" :element="element" />
  </div>
</template>
