<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';
import RollingTicker from '../Components/Home/RollingTicker.vue';

useScrollReveal();

const audiences = [
    {
        icon: 'fa-solid fa-school',
        title: 'Schools',
        image: '/assets/images/child-playing-with-blocks.png',
        imageAlt: 'Child playing with blocks — schools',
        intro: 'Schools are increasingly required to demonstrate the support provided to learners, monitor progress towards outcomes, and provide evidence to stakeholders, families, and local authorities. Development Beyond helps schools bring this information together in one place.',
        benefits: [
            'Track progress towards educational, behavioural, social, and developmental outcomes.',
            'Monitor support delivered through individual plans and interventions.',
            'Collect evidence through journal entries, photographs, comments, and permanent products.',
            'Demonstrate progress towards EHCP outcomes and school-based targets.',
            'Support annual reviews with meaningful evidence of provision and progress.',
            'Share information with families and other stakeholders.',
        ],
        closing: 'By reducing the time spent preparing information and reports, schools can focus more on supporting learners and improving outcomes.',
    },
    {
        icon: 'fa-solid fa-stethoscope',
        title: 'Clinics',
        image: '/assets/images/child-on-slide.png',
        imageAlt: 'Child on slide — clinics',
        intro: 'For clinics, timely access to information is essential for effective supervision, decision-making, and programme development. Development Beyond helps practitioners spend less time preparing information and more time analysing progress and implementing interventions.',
        benefits: [
            'Collect information live during teaching and intervention sessions.',
            'Automatically generate graphs and visual summaries.',
            'Track progress across domains, goals, and targets.',
            'Monitor medium- and long-term outcomes.',
            'Access information quickly during supervision and consultation sessions.',
            'Support data-informed decision-making and programme adjustments.',
            'Share progress with families and stakeholders.',
        ],
        closing: 'By reducing the time required to prepare information, practitioners can focus on reviewing progress, training staff, and supporting meaningful change.',
    },
    {
        icon: 'fa-solid fa-people-roof',
        title: 'Families',
        image: '/assets/images/child-baking-with-family.png',
        imageAlt: 'Child baking with family — families',
        intro: 'Families play a vital role in supporting progress. Development Beyond helps families gain a clearer understanding of what is being worked on, what progress has been made, and how learning can be supported outside of formal sessions.',
        benefits: [
            'Access information about progress and achievements.',
            'View evidence of learning through photographs, journal entries, and permanent products.',
            'Understand the skills that have been acquired.',
            'Explore opportunities to practise and reinforce skills at home.',
            'Monitor progress towards meaningful outcomes.',
            'Stay informed and connected with the support being provided.',
        ],
        closing: null,
    },
];
</script>

<template>
    <AppLayout title="Who We Support" description="Development Beyond supports schools, clinics, and families by providing meaningful information that helps guide decisions, demonstrate outcomes, and support learning beyond the immediate support environment.">

        <!-- Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Who We Support</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Every organisation, practitioner, and family needs a clear understanding of progress.
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Development Beyond supports schools, clinics, and families by providing meaningful
                    information that helps guide decisions, demonstrate outcomes, and support learning
                    beyond the immediate support environment.
                </p>
            </div>
        </section>
        <RollingTicker />

        <!-- Audience sections -->
        <section
            v-for="(audience, i) in audiences"
            :key="audience.title"
            :id="audience.title.toLowerCase()"
            :class="i % 2 === 0 ? 'bg-white' : 'bg-surface'"
            class="py-24"
        >
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div :class="i % 2 !== 0 ? 'lg:order-2' : ''" class="fade-in-up">
                        <img
                            :src="audience.image"
                            :alt="audience.imageAlt"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                    <div :class="i % 2 !== 0 ? 'lg:order-1' : ''">
                        <div class="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6 fade-in-up">
                            <span class="text-primary font-semibold text-sm">{{ audience.title }}</span>
                        </div>
                        <h2 class="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 leading-snug fade-in-up">
                            How Development Beyond Supports {{ audience.title }}
                        </h2>
                        <p class="text-muted text-base leading-relaxed mb-8 fade-in-up">
                            {{ audience.intro }}
                        </p>
                        <ul class="space-y-3 mb-6 fade-in-up">
                            <li
                                v-for="benefit in audience.benefits"
                                :key="benefit"
                                class="flex items-start gap-3 text-sm text-text-dark"
                            >
                                <i class="fa-solid fa-circle-check text-accent mt-0.5 shrink-0" />
                                <span>{{ benefit }}</span>
                            </li>
                        </ul>
                        <p v-if="audience.closing" class="text-muted text-sm leading-relaxed italic border-l-4 border-accent pl-4 fade-in-up">
                            {{ audience.closing }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Learner Repertoire Libraries -->
        <section class="py-24 bg-primary">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4 fade-in-up">Learner Repertoire Libraries</p>
                        <h2 class="font-heading text-2xl md:text-3xl font-bold text-white mb-6 leading-snug fade-in-up">
                            Bridging the gap between sessions and everyday life.
                        </h2>
                        <div class="space-y-4 text-white/70 text-base leading-relaxed fade-in-up">
                            <p>
                                Families are provided with practical ways to understand learning beyond
                                targets and graphs.
                            </p>
                            <p>
                                As skills are acquired, Development Beyond automatically builds a record of
                                those skills, helping families identify opportunities to reinforce and
                                generalise learning in everyday situations.
                            </p>
                            <p>
                                This helps bridge the gap between sessions and everyday life, ensuring that
                                learning can be practised across home, school, and community settings.
                            </p>
                        </div>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-at-supermarket.png"
                            alt="Child at supermarket — generalising skills in the community"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Supporting Meaningful Outcomes -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="max-w-3xl mx-auto text-center">
                    <p class="section-tag fade-in-up">Supporting Meaningful Outcomes</p>
                    <h2 class="section-title mt-2 mb-6 fade-in-up">
                        Designed for a wide range of settings.
                    </h2>
                    <div class="space-y-4 text-muted text-base leading-relaxed fade-in-up">
                        <p>
                            Although Development Beyond was inspired by our experience in Applied Behaviour
                            Analysis (ABA), the platform is designed to support a wide range of educational,
                            therapeutic, behavioural, developmental, and care-based services.
                        </p>
                        <p>
                            Our focus remains the same across every setting: helping people understand
                            progress, make informed decisions, and create meaningful outcomes that extend
                            beyond the immediate support environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </AppLayout>
</template>
