<template>
    <div class="mo-PanelColors p-4">
        <h2 class="font-bold">Unique colors: </h2>
        <template v-for="color in containerAllColors" v-bind:key="color">
            <div class="flex items-center">
                <div class="mo-PanelColors-color" :style="{backgroundColor: color}"></div>
                <p>{{ color }}</p>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useStore } from "@/stores/store";
import { Text } from "@/classes/Text";
import type { Element } from "@/classes/Element";

const containerAllColors = ref<String[]>([]);

const store = useStore();

onMounted(() => {
    getAllColors();
})


function getAllColors() {
    containerAllColors.value = [];
    store.canvas.elements.forEach((element: Element) => {
        if(Text.isAText(element)) {
            if(!containerAllColors.value.includes(element.background)){
                containerAllColors.value.push(element.background)
            }
            if(!containerAllColors.value.includes(element.colorText)){
                containerAllColors.value.push(element.colorText)
            }
        }
    })
}

watch(store.canvas.elements, () => {
    getAllColors();
})

</script>

<style scoped>
    .mo-PanelColors {
        background-color: white;
    }

    .mo-PanelColors-color {
        width: 10px;
        height: 10px;
        border: 1px solid black;
    }

</style>