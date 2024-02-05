<template>
    <div class="mo-DualRing">
    </div>
</template>

<style scoped>
    .mo-DualRing {
        display: inline-block;
        width: 80px;
        height: 80px;
    }

    .mo-DualRing:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--tw-ring-color);
        border-color: var(--tw-ring-color) transparent var(--tw-ring-color) transparent;
        animation: mo-dualring 1.2s linear infinite;
    }

    @keyframes mo-dualring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>