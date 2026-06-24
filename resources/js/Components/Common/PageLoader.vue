<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';

const loading = ref(false);

router.on('start', () => { loading.value = true; });
router.on('finish', () => { loading.value = false; });
</script>

<template>
    <Transition name="loader">
        <div v-if="loading" class="fixed top-0 left-0 right-0 z-[9999] h-1 bg-accent-light">
            <div class="h-full bg-primary animate-loader-bar" />
        </div>
    </Transition>
</template>

<style scoped>
@keyframes loader-bar {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 90%; }
}

.animate-loader-bar {
    animation: loader-bar 1.5s ease-in-out forwards;
}

.loader-enter-active,
.loader-leave-active {
    transition: opacity 0.3s;
}

.loader-enter-from,
.loader-leave-to {
    opacity: 0;
}
</style>
