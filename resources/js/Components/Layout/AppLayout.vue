<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Header from './Header.vue';
import Footer from './Footer.vue';
import PageLoader from '../Common/PageLoader.vue';
import { useMagicCursor } from '../../composables/useMagicCursor';

defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: 'Development Beyond helps practitioners, families, and organisations track progress, make informed decisions, and understand how learning can be applied beyond the instructional session.' },
});

useMagicCursor();
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

    <!-- Floating right-side quick links -->
    <div class="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col shadow-lg rounded-l-xl overflow-hidden">
        <Link
            href="/who-we-support"
            title="Who We Support — Schools"
            class="w-12 h-12 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200 border-b border-surface"
        >
            <i class="fa-solid fa-school text-lg" />
        </Link>
        <Link
            href="/approach"
            title="Our Approach — Learning"
            class="w-12 h-12 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
            <i class="fa-solid fa-book-open text-lg" />
        </Link>
    </div>
</template>
