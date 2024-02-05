<template>
    <div id="popup" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center content-center items-center" :class="{'hidden': hiddenModal}">
        <!-- Popup content -->
        <div class="bg-white p-4 rounded-md shadow-md w-9/12 h-4/5">
            <div class="flex justify-end">
                <span class="mo-IconClose ml-auto text-2xl" @click="hiddenModal = true">X</span>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from "vue";

    const emit = defineEmits(["update"]);

    interface Props {
        hidden: Boolean,
    }
    const props = withDefaults(defineProps<Props>(), { hidden: false});

    const hiddenModal = ref<Boolean>(props.hidden);

    watch(() => props.hidden, (newValue: Boolean) => {
        console.log(newValue)
        hiddenModal.value = newValue;
        emit('update', hiddenModal);
    })
</script>

<style scoped>

#popup {
    z-index: 4000;
}
.mo-IconClose {
    cursor: pointer;
}

</style>