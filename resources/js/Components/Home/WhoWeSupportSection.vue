<script setup>
import { Link } from '@inertiajs/vue3';

const audiences = [
    {
        icon: 'fa-solid fa-school',
        title: 'Schools',
        image: '/assets/images/child-playing-with-blocks.png',
        imageAlt: 'Child playing with blocks — schools',
        body: 'Schools are increasingly required to demonstrate the support provided to learners, monitor progress towards outcomes, and provide evidence to stakeholders, families, and local authorities. Development Beyond helps schools bring this information together in one place.',
    },
    {
        icon: 'fa-solid fa-stethoscope',
        title: 'Clinics',
        image: '/assets/images/child-on-slide.png',
        imageAlt: 'Child on slide — clinics',
        body: 'For clinics, timely access to information is essential for effective supervision, decision-making, and programme development. Development Beyond helps practitioners spend less time preparing information and more time analysing progress.',
    },
    {
        icon: 'fa-solid fa-house-heart',
        title: 'Families',
        image: '/assets/images/child-baking-with-family.png',
        imageAlt: 'Child baking with family — families',
        body: 'Families play a vital role in supporting progress. Development Beyond helps families gain a clearer understanding of what is being worked on, what progress has been made, and how learning can be supported outside of formal sessions.',
    },
];
</script>

<template>
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <p class="section-tag fade-in-up">Who We Support</p>
                <h2 class="section-title mt-2 mb-4 fade-in-up">
                    Every organisation, practitioner, and family needs a clear understanding of progress.
                </h2>
                <p class="section-subtitle fade-in-up">
                    Development Beyond supports schools, clinics, and families by providing meaningful
                    information that helps guide decisions and demonstrate outcomes.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div
                    v-for="(audience, i) in audiences"
                    :key="audience.title"
                    class="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-surface fade-in-up"
                    :style="`animation-delay: ${i * 0.1}s`"
                >
                    <div class="h-56 overflow-hidden">
                        <img
                            :src="audience.image"
                            :alt="audience.imageAlt"
                            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <i :class="[audience.icon, 'text-primary']" />
                            </div>
                            <h3 class="font-heading font-bold text-xl text-primary">{{ audience.title }}</h3>
                        </div>
                        <p class="text-muted text-sm leading-relaxed">{{ audience.body }}</p>
                    </div>
                </div>
            </div>

            <div class="text-center fade-in-up">
                <Link href="/who-we-support" class="btn-primary">Learn Who We Support</Link>
            </div>
        </div>
    </section>
</template>
