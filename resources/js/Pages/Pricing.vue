<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';
import RollingTicker from '../Components/Home/RollingTicker.vue';

useScrollReveal();

const plans = [
    {
        name: 'Starter',
        tagline: 'For individual practitioners or small teams',
        description: 'Ideal for individual practitioners or small teams getting started with progress tracking.',
        highlight: false,
        badge: null,
        features: [
            'Goal and target setting',
            'Core data collection methods',
            'Automatic graphing and summaries',
            'Family sharing',
            'Email support',
        ],
    },
    {
        name: 'Professional',
        tagline: 'For growing clinics and schools',
        description: 'For growing clinics and schools needing comprehensive data collection, analysis, and reporting.',
        highlight: true,
        badge: 'Most Popular',
        features: [
            'All data collection methods',
            'Learning journals and evidence capture',
            'Progress alerts and tracking',
            'Family portal with shared updates',
            'Reports and exports',
            'Priority support',
        ],
    },
    {
        name: 'Organisation',
        tagline: 'For multi-site organisations',
        description: 'Enterprise-level solution for multi-site organisations with custom onboarding and support.',
        highlight: false,
        badge: null,
        features: [
            'Everything in Professional',
            'Multi-site management',
            'Aggregated outcomes reporting',
            'Custom onboarding and training',
            'Dedicated account manager',
        ],
    },
];

const faqs = [
    {
        q: 'When will pricing be available?',
        a: 'We are currently finalising our pricing structure ahead of launch. Get in touch and we\'ll keep you updated as soon as pricing is confirmed.',
    },
    {
        q: 'Is there a free trial?',
        a: 'Yes — we plan to offer a trial period so you can explore Development Beyond before committing to a plan. Book a demo to learn more.',
    },
    {
        q: 'Can I change plans later?',
        a: 'Absolutely. Plans are designed to grow with your organisation. You can upgrade at any time and our team will help you make the transition smoothly.',
    },
    {
        q: 'Do you offer discounts for charities or small providers?',
        a: 'We are committed to making Development Beyond accessible. Contact our sales team to discuss your situation and we will do our best to find a solution that works.',
    },
];
</script>

<template>
    <AppLayout title="Pricing" description="Development Beyond offers flexible plans for individual practitioners, growing clinics and schools, and multi-site organisations. Pricing coming soon.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Pricing</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Choose a plan that fits your needs.
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Whether you're supporting a single learner or managing services across an organisation,
                    Development Beyond has a plan to match your needs. Pricing details coming soon.
                </p>
            </div>
        </section>
        <RollingTicker />

        <!-- Plans -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <p class="section-tag fade-in-up">Plans</p>
                    <h2 class="section-title mt-2 mb-4 fade-in-up">Choose the right plan for your organisation.</h2>
                    <p class="section-subtitle fade-in-up">
                        All plans include secure data storage, automatic graphing, and our core progress
                        tracking tools. Upgrade or change plan at any time.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 items-start">
                    <div
                        v-for="(plan, i) in plans"
                        :key="plan.name"
                        :id="plan.name.toLowerCase()"
                        class="rounded-2xl overflow-hidden transition-all duration-300 fade-in-up"
                        :class="plan.highlight
                            ? 'bg-primary shadow-2xl ring-2 ring-primary scale-105'
                            : 'bg-white shadow-sm hover:shadow-lg'"
                        :style="`animation-delay: ${i * 0.1}s`"
                    >
                        <div class="p-8">
                            <div v-if="plan.badge" class="inline-block bg-accent text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                                {{ plan.badge }}
                            </div>
                            <h3 class="font-heading font-bold text-2xl mb-1" :class="plan.highlight ? 'text-accent' : 'text-primary'">
                                {{ plan.name }}
                            </h3>
                            <p class="text-xs font-semibold uppercase tracking-widest mb-4" :class="plan.highlight ? 'text-white/50' : 'text-muted'">
                                {{ plan.tagline }}
                            </p>
                            <p class="text-sm leading-relaxed mb-6" :class="plan.highlight ? 'text-white/70' : 'text-muted'">
                                {{ plan.description }}
                            </p>
                            <div class="py-4 mb-6 border-y text-center" :class="plan.highlight ? 'border-white/20' : 'border-surface'">
                                <span class="text-sm font-semibold" :class="plan.highlight ? 'text-accent' : 'text-primary'">Pricing coming soon</span>
                            </div>
                            <ul class="space-y-3 mb-8">
                                <li
                                    v-for="feature in plan.features"
                                    :key="feature"
                                    class="flex items-start gap-3 text-sm"
                                    :class="plan.highlight ? 'text-white/80' : 'text-text-dark'"
                                >
                                    <i class="fa-solid fa-check mt-0.5 shrink-0" :class="plan.highlight ? 'text-accent' : 'text-primary'" />
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
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-16">
                        <p class="section-tag fade-in-up">FAQs</p>
                        <h2 class="section-title mt-2 fade-in-up">Common pricing questions.</h2>
                    </div>
                    <div class="space-y-6">
                        <div
                            v-for="(faq, i) in faqs"
                            :key="faq.q"
                            class="bg-surface rounded-2xl p-8 fade-in-up"
                            :style="`animation-delay: ${i * 0.1}s`"
                        >
                            <h3 class="font-heading font-bold text-lg text-primary mb-3">{{ faq.q }}</h3>
                            <p class="text-muted text-sm leading-relaxed">{{ faq.a }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-24 bg-accent-light">
            <div class="container mx-auto px-6 text-center">
                <p class="section-tag fade-in-up">Not Sure Which Plan?</p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-primary max-w-3xl mx-auto leading-tight mt-2 mb-6 fade-in-up">
                    Talk to our team and we'll find the right fit.
                </h2>
                <p class="text-muted text-lg max-w-2xl mx-auto mb-10 fade-in-up">
                    Our sales team will take the time to understand your setting, your caseload,
                    and your goals — and recommend the plan that makes the most sense.
                </p>
                <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                    <Link href="/contact-sales" class="btn-primary">Contact Sales</Link>
                    <Link href="/book-a-demo" class="btn-outline">Book a Demo</Link>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
