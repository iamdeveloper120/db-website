<script setup>
import { Link } from '@inertiajs/vue3';

const plans = [
    {
        name: 'Starter',
        description: 'Ideal for individual practitioners or small teams getting started with progress tracking.',
        highlight: false,
    },
    {
        name: 'Professional',
        description: 'For growing clinics and schools needing comprehensive data collection, analysis, and reporting.',
        highlight: true,
    },
    {
        name: 'Organisation',
        description: 'Enterprise-level solution for multi-site organisations with custom onboarding and support.',
        highlight: false,
    },
];
</script>

<template>
    <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
                <div>
                    <p class="section-tag fade-in-up">Pricing Plans</p>
                    <h2 class="section-title mt-2 mb-4 fade-in-up">
                        Choose a plan that fits your needs.
                    </h2>
                    <p class="section-subtitle fade-in-up">
                        Whether you're supporting a single learner or managing services across an
                        organisation, Development Beyond has a plan to match your needs.
                    </p>
                </div>
                <div class="text-right fade-in-up">
                    <Link href="/pricing" class="btn-primary">View Pricing Plans</Link>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="(plan, i) in plans"
                    :key="plan.name"
                    class="rounded-2xl p-8 border-2 transition-all duration-300 fade-in-up"
                    :class="plan.highlight
                        ? 'bg-primary border-primary text-white shadow-2xl scale-105'
                        : 'bg-surface border-surface hover:border-primary/30 hover:shadow-lg'"
                    :style="`animation-delay: ${i * 0.1}s`"
                >
                    <h3 class="font-heading font-bold text-2xl mb-2" :class="plan.highlight ? 'text-accent' : 'text-primary'">
                        {{ plan.name }}
                    </h3>
                    <p class="text-sm leading-relaxed mb-8" :class="plan.highlight ? 'text-white/70' : 'text-muted'">
                        {{ plan.description }}
                    </p>
                    <div class="border-t mb-8" :class="plan.highlight ? 'border-white/20' : 'border-primary/10'" />
                    <p class="text-xs font-semibold uppercase tracking-widest mb-6" :class="plan.highlight ? 'text-accent' : 'text-muted'">
                        Pricing details coming soon
                    </p>
                    <Link
                        href="/contact"
                        class="block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300"
                        :class="plan.highlight
                            ? 'bg-accent text-primary hover:bg-accent-light'
                            : 'bg-primary text-white hover:bg-primary-light'"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    </section>
</template>
