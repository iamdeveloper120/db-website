<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const collectionMethods = [
    'Single Binary Probe (e.g. Yes / No, + / -)',
    'Single Tertiary (e.g. Traffic light, 0,1,2)',
    'Prompt Level',
    'Frequency',
    'Duration',
    'Trial-by-Trial',
    'Percentage',
    'Task Analysis',
    'Quality Ratings',
    'Comments',
    'Wow Moments',
    'Evidence for Learning Journal (permanent products)',
];

const analysisExamples = [
    'Frequency and duration analysis',
    'Skill acquisition graphs',
    'Domain and goal progress',
    'Prompt-level tracking',
    'Quality rating summaries',
    'Learning phase progression',
];

const trackingTypes = [
    'Short-term target monitoring',
    'Medium-term goal tracking',
    'Long-term outcome tracking',
    'Cumulative skill acquisition',
    'Progress alerts when learners are not on track',
];
</script>

<template>
    <AppLayout title="Approach" description="Development Beyond provides a configurable framework for collecting information, monitoring progress, and sharing outcomes.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Approach</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    How Development Beyond Works
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Development Beyond provides a configurable framework for collecting information,
                    monitoring progress, and sharing outcomes. Whether supporting education, intervention,
                    therapy, care, or skill development.
                </p>
            </div>
        </section>

        <!-- Intro -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="max-w-3xl mx-auto text-center">
                    <p class="section-tag fade-in-up">What We Do</p>
                    <h2 class="section-title mt-2 mb-6 fade-in-up">A configurable framework for your needs.</h2>
                    <p class="section-subtitle fade-in-up">
                        Whether supporting education, intervention, therapy, care, or skill development,
                        the platform can be adapted to reflect an organisation's existing processes and
                        reporting requirements.
                    </p>
                </div>
            </div>
        </section>

        <!-- Data Collection -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p class="section-tag fade-in-up">Step 01</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">Collect Information</h2>
                        <p class="text-muted leading-relaxed mb-8 fade-in-up">
                            Information can be collected live during sessions using mobile devices and updated
                            later if required. Offline data collection is supported, with automatic
                            synchronisation when connectivity is restored.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 fade-in-up">
                            <div
                                v-for="method in collectionMethods"
                                :key="method"
                                class="flex items-start gap-3 bg-white rounded-xl p-3"
                            >
                                <i class="fa-solid fa-check text-primary mt-0.5 shrink-0" />
                                <span class="text-text-dark text-sm">{{ method }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-at-supermarket.png"
                            alt="Child at supermarket — community data collection"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Analyse Progress -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="order-2 lg:order-1 fade-in-up">
                        <img
                            src="/assets/images/child-playing-with-blocks.png"
                            alt="Child playing with blocks — learning and development"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                    <div class="order-1 lg:order-2">
                        <p class="section-tag fade-in-up">Step 02</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">Analyse Progress</h2>
                        <p class="text-muted leading-relaxed mb-8 fade-in-up">
                            Information is automatically organised into visual summaries and graphs, reducing
                            the time required to review performance and identify trends. This allows
                            practitioners and supervisors to focus on reviewing results rather than preparing them.
                        </p>
                        <ul class="space-y-3 fade-in-up">
                            <li
                                v-for="example in analysisExamples"
                                :key="example"
                                class="flex items-center gap-3 text-text-dark"
                            >
                                <i class="fa-solid fa-circle-check text-accent text-lg shrink-0" />
                                {{ example }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Track Progress -->
        <section class="py-24 bg-primary">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3 fade-in-up">Step 03</p>
                        <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-6 fade-in-up">Track Progress</h2>
                        <p class="text-white/70 leading-relaxed mb-8 fade-in-up">
                            Monitor performance across targets, goals, and outcome areas at every level of
                            the support programme.
                        </p>
                        <ul class="space-y-3 fade-in-up">
                            <li
                                v-for="type in trackingTypes"
                                :key="type"
                                class="flex items-center gap-3 text-white"
                            >
                                <i class="fa-solid fa-circle-check text-accent text-lg shrink-0" />
                                {{ type }}
                            </li>
                        </ul>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-on-slide.png"
                            alt="Child on slide — progress and achievement"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Evidence + Mand + Repertoire + Share -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <p class="section-tag fade-in-up">More Than Numbers</p>
                    <h2 class="section-title mt-2 fade-in-up">Evidence, Communication, and Sharing</h2>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 fade-in-up">
                        <i class="fa-solid fa-camera text-primary text-3xl mb-5 block" />
                        <h3 class="font-heading font-bold text-xl text-primary mb-3">Evidence of Learning</h3>
                        <p class="text-muted text-sm leading-relaxed">
                            Journal entries, photographs, permanent products, comments, and session notes can
                            be recorded alongside performance data, providing meaningful evidence of learning
                            and achievement over time.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 fade-in-up" style="animation-delay:0.1s">
                        <i class="fa-solid fa-comments text-primary text-3xl mb-5 block" />
                        <h3 class="font-heading font-bold text-xl text-primary mb-3">Mand Dictionary</h3>
                        <p class="text-muted text-sm leading-relaxed">
                            As learners are prompted to request an item or activity, DBIS automatically makes
                            an entry into the mand dictionary to enable the community who interact with that
                            learner to respond to their requests consistently.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 fade-in-up" style="animation-delay:0.2s">
                        <i class="fa-solid fa-book-open text-primary text-3xl mb-5 block" />
                        <h3 class="font-heading font-bold text-xl text-primary mb-3">Learner Repertoire Libraries</h3>
                        <p class="text-muted text-sm leading-relaxed">
                            As skills are mastered, DBIS automatically builds learner repertoires that can be
                            shared with practitioners, families, and stakeholders — a learner-centred record of
                            mastered concepts helping families understand what the learner can do.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 fade-in-up" style="animation-delay:0.3s">
                        <i class="fa-solid fa-share-nodes text-primary text-3xl mb-5 block" />
                        <h3 class="font-heading font-bold text-xl text-primary mb-3">Share Outcomes</h3>
                        <p class="text-muted text-sm leading-relaxed">
                            Information can be shared directly with families and stakeholders through secure
                            access and reporting tools, helping organisations demonstrate progress and keep
                            everyone involved informed and aligned.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-24 bg-accent-light">
            <div class="container mx-auto px-6 text-center">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-primary max-w-2xl mx-auto mb-6 fade-in-up">
                    See how Development Beyond can work for you.
                </h2>
                <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                    <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                    <Link href="/contact-sales" class="btn-outline">Contact Sales</Link>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
