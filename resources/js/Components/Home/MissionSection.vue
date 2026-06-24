<script setup>
const pillars = [
    {
        icon: 'fa-solid fa-bullseye',
        title: 'Evidence-Informed Decisions',
        body: 'Providing the information needed to make timely, informed decisions.',
    },
    {
        icon: 'fa-solid fa-star',
        title: 'Meaningful Outcomes',
        body: 'Helping people focus on outcomes that make a genuine difference beyond the instructional environment.',
    },
    {
        icon: 'fa-solid fa-users',
        title: 'Family Engagement',
        body: 'Supporting collaboration between practitioners, families, and stakeholders through shared understanding of progress.',
    },
];
</script>

<template>
    <section class="py-24 bg-primary relative overflow-hidden">
        <!-- Decorative circles -->
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-light/30 blur-3xl" aria-hidden="true" />
        <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

        <div class="relative z-10 container mx-auto px-6">
            <div class="max-w-3xl mx-auto text-center mb-16">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4 fade-in-up">Our Mission</p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white leading-snug fade-in-up">
                    To provide simple, flexible progress tracking that transforms information into
                    meaningful action, helping practitioners, families, and organisations create
                    <span class="text-accent">lasting outcomes.</span>
                </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="(pillar, i) in pillars"
                    :key="pillar.title"
                    class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 fade-in-up"
                    :style="`animation-delay: ${i * 0.1}s`"
                >
                    <i :class="[pillar.icon, 'text-accent text-3xl mb-5 block']" />
                    <h3 class="font-heading font-bold text-lg text-white mb-3">{{ pillar.title }}</h3>
                    <p class="text-white/70 text-sm leading-relaxed">{{ pillar.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
