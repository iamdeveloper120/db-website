<script setup>
import { Head } from '@inertiajs/vue3';
import Header from './Header.vue';
import Footer from './Footer.vue';
import PageLoader from '../Common/PageLoader.vue';

defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: 'Development Beyond helps practitioners, families, and organisations track progress, make informed decisions, and understand how learning can be applied beyond the instructional session.' },
});
</script>

<template>
    <Head>
        <title>{{ title ? `${title} — Development Beyond` : 'Development Beyond' }}</title>
        <meta name="description" :content="description" />
        <meta name="robots" content="noindex, nofollow" />
    </Head>

    <PageLoader />

    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
    </div>
</template>
