<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';
import RollingTicker from '../Components/Home/RollingTicker.vue';

useScrollReveal();

const values = [
    {
        icon: 'fa-solid fa-star',
        title: 'Meaningful Outcomes',
        body: 'We believe success should be measured by outcomes that make a genuine difference in people\'s everyday lives.',
    },
    {
        icon: 'fa-solid fa-circle-nodes',
        title: 'Simplicity',
        body: 'Powerful information should be easy to collect, understand, and use. We design our platform to simplify complex processes without sacrificing meaningful insight.',
    },
    {
        icon: 'fa-solid fa-chart-bar',
        title: 'Evidence-Informed Decisions',
        body: 'Effective decisions are built on accurate information. We help practitioners access the information they need to make timely, informed decisions.',
    },
    {
        icon: 'fa-solid fa-users',
        title: 'Collaboration',
        body: 'Meaningful progress is achieved when practitioners, families, organisations, and stakeholders work together towards shared goals.',
    },
    {
        icon: 'fa-solid fa-globe',
        title: 'Generalisation and Real-World Impact',
        body: 'Learning should extend beyond the instructional environment. We believe skills should be practised, reinforced, and applied across home, school, community, and everyday life.',
    },
];
</script>

<template>
    <AppLayout title="About Us" description="Development Beyond was created with a simple belief: meaningful outcomes should be visible, understandable, and transferable beyond the instructional environment.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Built with a belief in meaningful outcomes.
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Development Beyond Ltd was created with a simple belief: meaningful outcomes should be
                    visible, understandable, and transferable beyond the instructional environment.
                </p>
            </div>
        </section>
        <RollingTicker />

        <!-- Mission & Vision -->
        <section id="mission-vision" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16">
                    <div class="fade-in-up">
                        <div class="inline-flex items-center gap-3 bg-accent/30 px-4 py-2 rounded-full mb-6">
                            <i class="fa-solid fa-bullseye text-primary" />
                            <span class="text-primary font-semibold text-sm">Our Mission</span>
                        </div>
                        <h2 class="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 leading-snug">
                            To provide simple, flexible progress tracking that transforms information into
                            meaningful action, helping practitioners, families, and organisations create
                            lasting outcomes.
                        </h2>
                    </div>
                    <div class="fade-in-up">
                        <div class="inline-flex items-center gap-3 bg-accent/30 px-4 py-2 rounded-full mb-6">
                            <i class="fa-solid fa-eye text-primary" />
                            <span class="text-primary font-semibold text-sm">Our Vision</span>
                        </div>
                        <h2 class="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 leading-snug">
                            To become the standard for progress tracking across multiple sectors.
                        </h2>
                        <p class="text-muted leading-relaxed">
                            We envision a future where progress is easier to understand, evidence is easier to
                            share, and meaningful outcomes can be clearly demonstrated across all levels of support.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section id="values" class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <p class="section-tag fade-in-up">Our Values</p>
                    <h2 class="section-title mt-2 fade-in-up">What we stand for</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="(value, i) in values"
                        :key="value.title"
                        class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 fade-in-up"
                        :style="`animation-delay: ${i * 0.1}s`"
                    >
                        <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                            <i :class="[value.icon, 'text-primary text-xl']" />
                        </div>
                        <h3 class="font-heading font-bold text-xl text-primary mb-3">{{ value.title }}</h3>
                        <p class="text-muted text-sm leading-relaxed">{{ value.body }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why We Created DB -->
        <section id="why-we-created-db" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-washing-hands.png"
                            alt="Child washing hands — daily living skills and generalisation"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <p class="section-tag fade-in-up">Why We Created Development Beyond</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">
                            Inspired by experience. Built for action.
                        </h2>
                        <div class="space-y-4 text-muted text-base leading-relaxed fade-in-up">
                            <p>
                                Development Beyond was inspired by our experience in Applied Behaviour Analysis (ABA),
                                where effective teaching relies on accurate data collection, careful review, and
                                informed decision-making.
                            </p>
                            <p>
                                We recognised that while collecting information is important, the real value comes from
                                understanding what that information means and using it to guide future action.
                            </p>
                            <p>
                                We created Development Beyond to help practitioners, families, and organisations move
                                more efficiently from information to action while keeping meaningful outcomes at the
                                centre of the process.
                            </p>
                            <p>
                                The name <strong class="text-primary">Development Beyond</strong> reflects our belief
                                that progress should extend beyond the session, beyond the data, and beyond the immediate
                                teaching environment into everyday life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Looking Forward / CTA -->
        <section class="py-24 bg-accent-light">
            <div class="container mx-auto px-6 text-center">
                <p class="section-tag fade-in-up">Looking Forward</p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-primary max-w-3xl mx-auto leading-tight mt-2 mb-6 fade-in-up">
                    Our focus remains unchanged.
                </h2>
                <p class="text-muted text-lg max-w-2xl mx-auto mb-10 fade-in-up">
                    As Development Beyond continues to grow, our focus remains unchanged: helping practitioners,
                    families, and organisations turn information into meaningful action and create lasting outcomes.
                    Because progress matters most when it extends beyond the session and into everyday life.
                </p>
                <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                    <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                    <Link href="/contact-sales" class="btn-outline">Contact Sales</Link>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
