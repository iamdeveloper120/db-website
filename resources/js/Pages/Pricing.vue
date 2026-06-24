<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const plans = [
    {
        name: 'Starter',
        tag: 'For individuals & small teams',
        highlight: false,
        features: [
            'Progress tracking for individual learners',
            'Goal and target management',
            'Data collection via mobile',
            'Visual summaries and graphs',
            'Evidence for learning journal',
        ],
    },
    {
        name: 'Professional',
        tag: 'For growing clinics & schools',
        highlight: true,
        features: [
            'Everything in Starter',
            'Multi-learner management',
            'Learner repertoire libraries',
            'Mand dictionary',
            'Supervision and reporting tools',
            'Family and stakeholder access',
        ],
    },
    {
        name: 'Organisation',
        tag: 'For multi-site organisations',
        highlight: false,
        features: [
            'Everything in Professional',
            'Multi-site management',
            'Custom onboarding support',
            'Priority support',
            'Custom pricing available',
            'Enterprise reporting',
        ],
    },
];
</script>

<template>
    <AppLayout title="Pricing" description="Choose a Development Beyond plan that fits your needs, whether you're supporting a single learner or managing services across an organisation.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6 text-center">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Pricing</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight mb-6">
                    Choose the plan that's right for you.
                </h1>
                <p class="text-white/70 text-lg max-w-xl mx-auto">
                    Pricing details are being finalised. Contact our team to discuss your requirements
                    and get early access information.
                </p>
            </div>
        </section>

        <!-- Plans -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div
                        v-for="(plan, i) in plans"
                        :key="plan.name"
                        class="rounded-2xl p-8 border-2 transition-all duration-300 flex flex-col fade-in-up"
                        :class="plan.highlight
                            ? 'bg-primary border-primary shadow-2xl scale-105'
                            : 'bg-surface border-surface hover:border-primary/30'"
                        :style="`animation-delay: ${i * 0.1}s`"
                    >
                        <div class="mb-6">
                            <p class="text-xs font-semibold uppercase tracking-widest mb-2" :class="plan.highlight ? 'text-accent' : 'text-muted'">
                                {{ plan.tag }}
                            </p>
                            <h2 class="font-heading font-bold text-3xl" :class="plan.highlight ? 'text-accent' : 'text-primary'">
                                {{ plan.name }}
                            </h2>
                        </div>

                        <div class="border-t mb-6" :class="plan.highlight ? 'border-white/20' : 'border-primary/10'" />

                        <p class="text-sm font-semibold mb-6" :class="plan.highlight ? 'text-white/70' : 'text-muted'">
                            Pricing details coming soon
                        </p>

                        <ul class="space-y-3 flex-1 mb-8">
                            <li
                                v-for="feature in plan.features"
                                :key="feature"
                                class="flex items-start gap-3 text-sm"
                                :class="plan.highlight ? 'text-white/80' : 'text-text-dark'"
                            >
                                <i class="fa-solid fa-check shrink-0 mt-0.5" :class="plan.highlight ? 'text-accent' : 'text-primary'" />
                                {{ feature }}
                            </li>
                        </ul>

                        <Link
                            href="/contact-sales"
                            class="block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300"
                            :class="plan.highlight
                                ? 'bg-accent text-primary hover:bg-accent-light'
                                : 'bg-primary text-white hover:bg-primary-light'"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <div class="text-center mt-16 fade-in-up">
                    <p class="text-muted mb-6">
                        Not sure which plan is right for you? Book a demo and we'll help you find the best fit.
                    </p>
                    <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
