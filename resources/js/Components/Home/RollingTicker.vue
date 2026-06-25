<script setup>
import { Link } from '@inertiajs/vue3';

const items = [
    { label: 'Data Collection',              href: '/approach' },
    { label: 'Progress Tracking',            href: '/approach' },
    { label: 'Data Analysis',                href: '/approach' },
    { label: 'Learning Repertoire Libraries',href: '/approach' },
    { label: 'Learning Journal',             href: '/approach' },
    { label: 'Meaningful Outcomes',          href: '/who-we-support' },
    { label: 'Home / School / Community',    href: '/who-we-support' },
];
</script>

<template>
    <div class="bg-accent overflow-hidden py-4 ticker-wrapper">
        <div class="flex gap-0 ticker-track">
            <!-- duplicated for infinite loop -->
            <div
                v-for="n in 2"
                :key="n"
                class="flex items-center gap-8 shrink-0 ticker-set"
            >
                <Link
                    v-for="item in items"
                    :key="item.label + n"
                    :href="item.href"
                    class="flex items-center gap-3 whitespace-nowrap text-primary font-semibold text-sm uppercase tracking-wider ticker-item"
                >
                    <i class="fa-solid fa-circle-dot text-primary-light text-xs" />
                    {{ item.label }}
                </Link>
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

.ticker-wrapper:hover .ticker-track {
    animation-play-state: paused;
}

.ticker-set {
    padding-right: 4rem;
}

.ticker-item {
    transition: color 0.2s, opacity 0.2s;
}

.ticker-item:hover {
    color: var(--color-primary-light, #385A7D);
    opacity: 0.75;
    text-decoration: underline;
    text-underline-offset: 3px;
}

@keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
</style>
