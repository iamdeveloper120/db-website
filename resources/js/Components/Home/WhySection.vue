<script setup>
import { Link } from '@inertiajs/vue3';

const features = [
    {
        icon: 'fa-solid fa-chart-line',
        title: 'Meaningful Progress Tracking',
        body: 'Monitor progress towards short-, medium-, and long-term goals through clear visual summaries and meaningful performance measures.',
    },
    {
        icon: 'fa-solid fa-camera',
        title: 'Evidence of Learning',
        body: 'Capture photographs, journal entries, comments, and permanent products alongside performance data to provide a richer picture of progress and achievement.',
    },
    {
        icon: 'fa-solid fa-book-open',
        title: 'Learner Repertoire Libraries',
        body: 'Automatically builds learner repertoire libraries that help practitioners, families, and stakeholders understand what has been learned and how skills can be practised across home, school, and community settings.',
    },
];
</script>

<template>
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <!-- Header -->
            <div class="grid lg:grid-cols-2 gap-12 items-start mb-16">
                <div>
                    <p class="section-tag fade-in-up">Why Development Beyond?</p>
                    <h2 class="section-title fade-in-up mt-2">
                        Simple progress tracking that turns information into meaningful action.
                    </h2>
                </div>
                <div class="flex flex-col justify-end">
                    <p class="section-subtitle fade-in-up">
                        Collecting information is only the beginning. Real progress happens when information
                        is used to make informed decisions, guide teaching, and support meaningful outcomes.
                    </p>
                    <p class="text-muted leading-relaxed mt-4 fade-in-up">
                        Development Beyond helps users move efficiently from data collection to action by
                        providing clear visual summaries, progress tracking, evidence of learning, and
                        practical ways to apply skills beyond the teaching environment.
                    </p>
                    <p class="text-muted leading-relaxed mt-4 fade-in-up">
                        Whether supporting a single learner or managing services across an organisation,
                        Development Beyond provides the information needed to understand progress and plan
                        the next steps.
                    </p>
                    <div class="flex flex-wrap gap-4 mt-8 fade-in-up">
                        <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                        <Link href="/contact-sales" class="btn-outline">Contact Sales</Link>
                    </div>
                </div>
            </div>

            <!-- Feature cards -->
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="(feature, i) in features"
                    :key="feature.title"
                    class="bg-surface rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 fade-in-up group"
                    :style="`animation-delay: ${i * 0.1}s`"
                >
                    <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <i :class="[feature.icon, 'text-primary text-xl group-hover:text-white transition-colors duration-300']" />
                    </div>
                    <h3 class="font-heading font-bold text-xl text-primary mb-3">{{ feature.title }}</h3>
                    <p class="text-muted text-sm leading-relaxed">{{ feature.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
