<script setup>
const items = [
    'Data Collection',
    'Progress Tracking',
    'Data Analysis',
    'Learning Repertoire Libraries',
    'Learning Journal',
    'Meaningful Outcomes',
    'Home / School / Community',
];
</script>

<template>
    <div class="bg-accent overflow-hidden py-4 select-none" aria-hidden="true">
        <div class="flex gap-0 ticker-track">
            <!-- duplicated for infinite loop -->
            <div
                v-for="n in 2"
                :key="n"
                class="flex items-center gap-8 shrink-0 ticker-set"
            >
                <span
                    v-for="item in items"
                    :key="item"
                    class="flex items-center gap-3 whitespace-nowrap text-primary font-semibold text-sm uppercase tracking-wider"
                >
                    <i class="fa-solid fa-circle-dot text-primary-light text-xs" />
                    {{ item }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ticker-track {
    display: flex;
    width: max-content;
    animation: ticker 30s linear infinite;
}

.ticker-set {
    padding-right: 4rem;
}

@keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
</style>
