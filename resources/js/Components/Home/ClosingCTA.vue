<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <section class="py-24 bg-accent-light">
        <div class="container mx-auto px-6 text-center">
            <p class="section-tag fade-in-up">Ready to Get Started?</p>
            <h2 class="font-heading text-3xl md:text-5xl font-bold text-primary max-w-3xl mx-auto leading-tight mt-2 mb-6 fade-in-up">
                Ready to See Development Beyond in Action?
            </h2>
            <p class="text-muted text-lg max-w-2xl mx-auto mb-10 fade-in-up">
                Discover how simple progress tracking can help turn information into meaningful action.
            </p>
            <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                <Link href="/contact" class="btn-outline">Contact Sales</Link>
            </div>
        </div>
    </section>
</template>
