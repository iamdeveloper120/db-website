<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const schoolPoints = [
    'Track progress towards educational, behavioural, social, and developmental outcomes.',
    'Monitor support delivered through individual plans and interventions.',
    'Collect evidence through journal entries, photographs, comments, and permanent products.',
    'Demonstrate progress towards EHCP outcomes and school-based targets.',
    'Support annual reviews with meaningful evidence of provision and progress.',
    'Share information with families and other stakeholders.',
];

const clinicPoints = [
    'Collect information live during teaching and intervention sessions.',
    'Automatically generate graphs and visual summaries.',
    'Track progress across domains, goals, and targets.',
    'Monitor medium- and long-term outcomes.',
    'Access information quickly during supervision and consultation sessions.',
    'Support data-informed decision-making and programme adjustments.',
    'Share progress with families and stakeholders.',
];

const familyPoints = [
    'Access information about progress and achievements.',
    'View evidence of learning through photographs, journal entries, and permanent products.',
    'Understand the skills that have been acquired.',
    'Explore opportunities to practise and reinforce skills at home.',
    'Monitor progress towards meaningful outcomes.',
    'Stay informed and connected with the support being provided.',
];
</script>

<template>
    <AppLayout title="Who We Support" description="Development Beyond supports schools, clinics, and families by providing meaningful information that helps guide decisions and demonstrate outcomes.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Who We Support</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Supporting schools, clinics, and families.
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Every organisation, practitioner, and family needs a clear understanding of progress.
                    Development Beyond supports all three by providing meaningful information that helps
                    guide decisions, demonstrate outcomes, and support learning.
                </p>
            </div>
        </section>

        <!-- Schools -->
        <section class="py-24 bg-white" id="schools">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div class="inline-flex items-center gap-3 bg-accent/30 px-4 py-2 rounded-full mb-6 fade-in-up">
                            <i class="fa-solid fa-school text-primary" />
                            <span class="text-primary font-semibold text-sm">Schools</span>
                        </div>
                        <h2 class="section-title mb-6 fade-in-up">Supporting schools to demonstrate progress and provision.</h2>
                        <p class="text-muted leading-relaxed mb-8 fade-in-up">
                            Schools are increasingly required to demonstrate the support provided to learners,
                            monitor progress towards outcomes, and provide evidence to stakeholders, families,
                            and local authorities. Development Beyond helps schools bring this information
                            together in one place.
                        </p>
                        <ul class="space-y-3 mb-8 fade-in-up">
                            <li
                                v-for="point in schoolPoints"
                                :key="point"
                                class="flex items-start gap-3 text-text-dark"
                            >
                                <i class="fa-solid fa-circle-check text-accent text-lg shrink-0 mt-0.5" />
                                <span class="text-sm leading-relaxed">{{ point }}</span>
                            </li>
                        </ul>
                        <p class="text-muted text-sm leading-relaxed italic fade-in-up">
                            By reducing the time spent preparing information and reports, schools can focus
                            more on supporting learners and improving outcomes.
                        </p>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-playing-with-blocks.png"
                            alt="Child playing with blocks — school learning"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Clinics -->
        <section class="py-24 bg-surface" id="clinics">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="order-2 lg:order-1 fade-in-up">
                        <img
                            src="/assets/images/child-on-slide.png"
                            alt="Child on slide — clinic support"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                    <div class="order-1 lg:order-2">
                        <div class="inline-flex items-center gap-3 bg-accent/30 px-4 py-2 rounded-full mb-6 fade-in-up">
                            <i class="fa-solid fa-stethoscope text-primary" />
                            <span class="text-primary font-semibold text-sm">Clinics</span>
                        </div>
                        <h2 class="section-title mb-6 fade-in-up">Helping clinics focus on progress, not paperwork.</h2>
                        <p class="text-muted leading-relaxed mb-8 fade-in-up">
                            For clinics, timely access to information is essential for effective supervision,
                            decision-making, and programme development. Development Beyond helps practitioners
                            spend less time preparing information and more time analysing progress and
                            implementing interventions.
                        </p>
                        <ul class="space-y-3 mb-8 fade-in-up">
                            <li
                                v-for="point in clinicPoints"
                                :key="point"
                                class="flex items-start gap-3 text-text-dark"
                            >
                                <i class="fa-solid fa-circle-check text-accent text-lg shrink-0 mt-0.5" />
                                <span class="text-sm leading-relaxed">{{ point }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Families -->
        <section class="py-24 bg-white" id="families">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div class="inline-flex items-center gap-3 bg-accent/30 px-4 py-2 rounded-full mb-6 fade-in-up">
                            <i class="fa-solid fa-house-heart text-primary" />
                            <span class="text-primary font-semibold text-sm">Families</span>
                        </div>
                        <h2 class="section-title mb-6 fade-in-up">Keeping families informed and engaged.</h2>
                        <p class="text-muted leading-relaxed mb-8 fade-in-up">
                            Families play a vital role in supporting progress. Development Beyond helps
                            families gain a clearer understanding of what is being worked on, what progress
                            has been made, and how learning can be supported outside of formal sessions.
                        </p>
                        <ul class="space-y-3 mb-8 fade-in-up">
                            <li
                                v-for="point in familyPoints"
                                :key="point"
                                class="flex items-start gap-3 text-text-dark"
                            >
                                <i class="fa-solid fa-circle-check text-accent text-lg shrink-0 mt-0.5" />
                                <span class="text-sm leading-relaxed">{{ point }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-baking-with-family.png"
                            alt="Child baking with family — home engagement"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Repertoire Libraries & Meaningful Outcomes -->
        <section class="py-24 bg-primary">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up">
                            Learner Repertoire Libraries and Evidence for Learning Journals
                        </h2>
                        <p class="text-white/70 leading-relaxed mb-6 fade-in-up">
                            Families are provided with practical ways to understand learning beyond targets and graphs.
                            As skills are acquired, Development Beyond automatically builds a record of those skills,
                            helping families identify opportunities to reinforce and generalise learning in everyday situations.
                        </p>
                        <p class="text-white/70 leading-relaxed mb-8 fade-in-up">
                            This helps bridge the gap between sessions and everyday life, ensuring that learning can
                            be practised across home, school, and community settings.
                        </p>
                    </div>
                    <div>
                        <div class="grid grid-cols-2 gap-4 fade-in-up">
                            <img
                                src="/assets/images/child-at-supermarket.png"
                                alt="Child at supermarket — community learning"
                                class="rounded-2xl object-cover aspect-square"
                                loading="lazy"
                            />
                            <img
                                src="/assets/images/family-at-the-park.png"
                                alt="Family at the park — generalisation"
                                class="rounded-2xl object-cover aspect-square mt-8"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Meaningful Outcomes positioning -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="max-w-3xl mx-auto text-center">
                    <p class="section-tag fade-in-up">Supporting Meaningful Outcomes</p>
                    <h2 class="section-title mt-2 mb-6 fade-in-up">Designed for a wide range of settings.</h2>
                    <p class="text-muted text-lg leading-relaxed mb-10 fade-in-up">
                        Although Development Beyond was inspired by our experience in Applied Behaviour Analysis
                        (ABA), the platform is designed to support a wide range of educational, therapeutic,
                        behavioural, developmental, and care-based services. Our focus remains the same across
                        every setting: helping people understand progress, make informed decisions, and create
                        meaningful outcomes.
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                        <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                        <Link href="/contact-sales" class="btn-outline">Contact Sales</Link>
                    </div>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
