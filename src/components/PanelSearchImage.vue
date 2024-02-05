<!-- eslint-disable prettier/prettier -->
<template>
    <button class="mo-ButtonOpenApi p-2 rounded border border-blue-500" @click="activePopup = false">Add Image Api</button>
    <Popup :hidden="activePopup" @update="activePopup = $event">
        <div class="max-w-md mx-auto bg-white p-6 rounded-md">
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Term to search</label>
            <input
                v-model="term"
                type="text"
                id="image"
                name="image"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter term to search"
            />
        </div>
        <div class="flex justify-center flex-wrap overflow-y-scroll h-3/4">
            <img @click="insertElement(image.preview)" class="basis-1/4 p-2 w-1/4 " :src="image.preview" alt="" v-for="image in results" v-bind:key="image.id">
            <br>
            <InfiniteLoading @infinite="getImages" v-if="results.length !== 0 && nextLink !== null"/>
            <div class="w-100 flex items-center" v-if="showLoader">
                <Loader></Loader>
            </div>
        </div>
    </Popup>
</template>

<script setup lang="ts">
import { ref, watch, inject, nextTick } from "vue";
import Popup from "@/components/utils/Popup.vue";
import Loader from "@/components/utils/Loader.vue";
import type { ImageFetch } from "@/types";
import { useStore } from "@/stores/store";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; 

const store = useStore();

const debounce = inject("$debounce");
const searchWithDebounce = debounce(resetAndGetImages, 300);
const showLoader = ref<Boolean>(false);

const activePopup = ref<Boolean>(true);
const term = ref<String>("");


const nextLink = ref<String | null>(null);
const results = ref<ImageFetch[]>([]);
const metaFecth = ref({});

function resetAndGetImages() {
    showLoader.value = true;
    results.value = [];
    metaFecth.value = {};
    nextLink.value = null;
    getImages();
}

function getImages() {
    const link :string = nextLink.value !== null ?  nextLink.value : `https://wepik.com/api/images/freepik?query=${term.value}`;
    fetch(link)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            showLoader.value = false;
            results.value = results.value.concat(data.data);
            nextLink.value = data.links.next;
            metaFecth.value = data.meta;
        })
        .catch((error) => {
            showLoader.value = false;
            console.error("Fetch error:", error);
        });
}

function insertElement (url) {
    store.addElementImage(url);
    alert("Element inserted");
}

watch(term, (newValue) => {
    if (newValue !== "") {
        searchWithDebounce();
    }
});

</script>

<style scoped>

img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    max-height: 300px;
}

:deep(.spinner) {
    box-sizing: initial;
    border: 6px solid var(--tw-ring-color);
    border-right-color: transparent;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border-color: var(--tw-ring-color) transparent var(--tw-ring-color) transparent;
}

</style>
