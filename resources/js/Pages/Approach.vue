<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const steps = [
    {
        step: '01',
        title: 'Set Goals and Outcomes',
        body: 'Create domains, goals, and targets that reflect the outcomes being worked towards. Targets can be linked to medium- and long-term goals, helping organisations monitor progress at every level and demonstrate how day-to-day activities contribute to broader outcomes.',
    },
    {
        step: '02',
        title: 'Collect Information',
        body: 'Information can be collected live during sessions using mobile devices and updated later if required. Offline data collection is supported, with automatic synchronisation when connectivity is restored.',
    },
    {
        step: '03',
        title: 'Analyse Progress',
        body: 'Information is automatically organised into visual summaries and graphs, reducing the time required to review performance and identify trends. This allows practitioners and supervisors to focus on reviewing results rather than preparing them.',
    },
    {
        step: '04',
        title: 'Track Progress',
        body: 'Monitor performance across targets, goals, and outcome areas. Development Beyond supports short-term target monitoring, medium-term goal tracking, long-term outcome tracking, cumulative skill acquisition, and progress alerts when learners are not on track.',
    },
    {
        step: '05',
        title: 'Evidence of Learning',
        body: 'Progress is more than numbers alone. Journal entries, photographs, permanent products, comments, and session notes can be recorded alongside performance data, providing meaningful evidence of learning and achievement over time.',
    },
    {
        step: '06',
        title: 'Mand Dictionary',
        body: 'As learners are prompted to request an item or activity, the system automatically makes an entry into the mand dictionary. This enables everyone who interacts with the learner to respond consistently to their requests. Photos or videos of signs can be added to support teams and families where vocal manding is not the selected response form.',
    },
    {
        step: '07',
        title: 'Learner Repertoire Libraries',
        body: 'As skills are mastered, Development Beyond automatically builds learner repertoires that can be shared with practitioners, families, and stakeholders. The library helps everyone understand what the learner can do, how skills were learned, evidence of real-world use, whether skills have been generalised, and whether they have been maintained.',
    },
    {
        step: '08',
        title: 'Share Outcomes',
        body: 'Information can be shared directly with families and stakeholders through secure access and reporting tools. This helps organisations demonstrate progress, provide evidence of support, and keep everyone involved informed and aligned.',
    },
];

const collectionMethods = [
    { icon: 'fa-solid fa-toggle-on', label: 'Single Binary Probe', example: 'e.g. Yes / No, + / –' },
    { icon: 'fa-solid fa-traffic-light', label: 'Single Tertiary', example: 'e.g. Traffic light, 0, 1, 2' },
    { icon: 'fa-solid fa-hand-point-up', label: 'Prompt Level', example: null },
    { icon: 'fa-solid fa-hashtag', label: 'Frequency', example: null },
    { icon: 'fa-solid fa-stopwatch', label: 'Duration', example: null },
    { icon: 'fa-solid fa-list-check', label: 'Trial-by-Trial', example: null },
    { icon: 'fa-solid fa-percent', label: 'Percentage', example: null },
    { icon: 'fa-solid fa-bars-progress', label: 'Task Analysis', example: null },
    { icon: 'fa-solid fa-star-half-stroke', label: 'Quality Ratings', example: null },
    { icon: 'fa-solid fa-comment-dots', label: 'Comments', example: null },
    { icon: 'fa-solid fa-star', label: 'Wow Moments', example: null },
    { icon: 'fa-solid fa-images', label: 'Evidence for Learning Journal', example: 'permanent products' },
];

const analysisTypes = [
    { icon: 'fa-solid fa-chart-bar', label: 'Frequency and duration analysis' },
    { icon: 'fa-solid fa-chart-line', label: 'Skill acquisition graphs' },
    { icon: 'fa-solid fa-bullseye', label: 'Domain and goal progress' },
    { icon: 'fa-solid fa-hand-point-up', label: 'Prompt-level tracking' },
    { icon: 'fa-solid fa-star-half-stroke', label: 'Quality rating summaries' },
    { icon: 'fa-solid fa-stairs', label: 'Learning phase progression' },
];

const trackingLevels = [
    {
        icon: 'fa-solid fa-crosshairs',
        title: 'Short-Term',
        label: 'Target monitoring',
        body: 'Track day-to-day performance on individual targets. Progress alerts notify practitioners when a learner is not on track.',
    },
    {
        icon: 'fa-solid fa-flag',
        title: 'Medium-Term',
        label: 'Goal tracking',
        body: 'Monitor whether short-term targets are combining to produce goal-level progress across domains and skill areas.',
    },
    {
        icon: 'fa-solid fa-mountain-sun',
        title: 'Long-Term',
        label: 'Outcome tracking',
        body: 'Demonstrate meaningful progress at the outcome level — the evidence that stakeholders, families, and funding bodies need.',
    },
];
</script>

<template>
    <AppLayout title="How Development Beyond Works" description="Development Beyond provides a configurable framework for collecting information, monitoring progress, and sharing outcomes across education, intervention, therapy, care, and skill development.">

        <!-- Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Approach</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    How Development Beyond Works
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    A configurable framework for collecting information, monitoring progress, and sharing outcomes
                    — across education, intervention, therapy, care, and skill development.
                </p>
            </div>
        </section>

        <!-- What We Do -->
        <section id="what-we-do" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p class="section-tag fade-in-up">What We Do</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">
                            A flexible platform that adapts to how you work.
                        </h2>
                        <div class="space-y-4 text-muted text-base leading-relaxed fade-in-up">
                            <p>
                                Development Beyond provides a configurable framework for collecting information,
                                monitoring progress, and sharing outcomes.
                            </p>
                            <p>
                                Whether supporting education, intervention, therapy, care, or skill development,
                                the platform can be adapted to reflect an organisation's existing processes and
                                reporting requirements.
                            </p>
                        </div>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-paying-for-book.png"
                            alt="Child paying for a book — independence and everyday skills"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- How We Do It — 8 steps -->
        <section id="how-we-do-it" class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-start">
                    <div class="lg:sticky lg:top-32">
                        <p class="section-tag fade-in-up">How We Do It</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">
                            From goals to outcomes, step by step.
                        </h2>
                        <p class="section-subtitle mb-8 fade-in-up">
                            Development Beyond guides practitioners from setting goals through to sharing
                            evidence with the people who matter most.
                        </p>
                        <div class="bg-primary rounded-2xl p-8 fade-in-up">
                            <img
                                src="/assets/images/child-playing-with-family.png"
                                alt="Child playing with family — progress beyond the session"
                                class="w-full rounded-xl object-cover aspect-video"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div class="space-y-5">
                        <div
                            v-for="(step, i) in steps"
                            :key="step.step"
                            class="flex gap-6 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-up"
                            :style="`animation-delay: ${i * 0.07}s`"
                        >
                            <div class="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                                <span class="font-heading font-bold text-sm text-accent">{{ step.step }}</span>
                            </div>
                            <div>
                                <h3 class="font-heading font-bold text-lg text-primary mb-2">{{ step.title }}</h3>
                                <p class="text-muted text-sm leading-relaxed">{{ step.body }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Data Collection Methods -->
        <section id="data-collection" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <p class="section-tag fade-in-up">Data Collection</p>
                    <h2 class="section-title mt-2 mb-4 fade-in-up">
                        Collect the information that matters, the way it makes sense.
                    </h2>
                    <p class="section-subtitle fade-in-up">
                        Information can be collected live during sessions using mobile devices and updated
                        later if required. Offline collection is supported, with automatic synchronisation
                        when connectivity is restored.
                    </p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div
                        v-for="(method, i) in collectionMethods"
                        :key="method.label"
                        class="bg-surface rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 fade-in-up"
                        :style="`animation-delay: ${i * 0.05}s`"
                    >
                        <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <i :class="[method.icon, 'text-primary text-lg']" />
                        </div>
                        <p class="font-heading font-semibold text-sm text-primary leading-snug mb-1">{{ method.label }}</p>
                        <p v-if="method.example" class="text-muted text-xs">{{ method.example }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Data Analysis -->
        <section id="data-analysis" class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p class="section-tag fade-in-up">Data Analysis</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">
                            Focus on reviewing results, not preparing them.
                        </h2>
                        <p class="text-muted text-base leading-relaxed mb-8 fade-in-up">
                            Information is automatically organised into visual summaries and graphs,
                            reducing the time required to review performance and identify trends.
                            This allows practitioners and supervisors to focus on reviewing results
                            rather than preparing them.
                        </p>
                        <div class="grid grid-cols-2 gap-4">
                            <div
                                v-for="(type, i) in analysisTypes"
                                :key="type.label"
                                class="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm fade-in-up"
                                :style="`animation-delay: ${i * 0.07}s`"
                            >
                                <i :class="[type.icon, 'text-primary shrink-0']" />
                                <span class="text-text-dark text-sm font-medium">{{ type.label }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/child-washing-hands.png"
                            alt="Child washing hands — daily living skills"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Progress Tracking -->
        <section id="progress-tracking" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <p class="section-tag fade-in-up">Progress Tracking</p>
                    <h2 class="section-title mt-2 mb-4 fade-in-up">
                        Monitor progress at every level.
                    </h2>
                    <p class="section-subtitle fade-in-up">
                        Development Beyond tracks performance across targets, goals, and outcome areas —
                        with progress alerts when learners are not on track.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div
                        v-for="(level, i) in trackingLevels"
                        :key="level.title"
                        class="bg-surface rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 fade-in-up"
                        :style="`animation-delay: ${i * 0.1}s`"
                    >
                        <div class="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                            <i :class="[level.icon, 'text-accent text-xl']" />
                        </div>
                        <p class="text-xs font-bold uppercase tracking-widest text-muted mb-1">{{ level.title }}</p>
                        <h3 class="font-heading font-bold text-xl text-primary mb-4">{{ level.label }}</h3>
                        <p class="text-muted text-sm leading-relaxed">{{ level.body }}</p>
                    </div>
                </div>

                <div class="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center fade-in-up">
                    <p class="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
                        Cumulative skill acquisition is tracked automatically, giving practitioners and
                        organisations a clear view of how learners are building their repertoire of skills
                        over time — across all domains and outcome areas.
                    </p>
                </div>
            </div>
        </section>

        <!-- Reporting and Outcomes -->
        <section id="reporting" class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="fade-in-up">
                        <img
                            src="/assets/images/family-at-the-park.png"
                            alt="Family at the park — real-world generalisation"
                            class="rounded-2xl w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <p class="section-tag fade-in-up">Reporting and Outcomes</p>
                        <h2 class="section-title mt-2 mb-6 fade-in-up">
                            Keep everyone informed and aligned.
                        </h2>
                        <div class="space-y-4 text-muted text-base leading-relaxed fade-in-up">
                            <p>
                                Information can be shared directly with families and stakeholders through
                                secure access and reporting tools.
                            </p>
                            <p>
                                This helps organisations demonstrate progress, provide evidence of support,
                                and keep everyone involved informed and aligned.
                            </p>
                        </div>
                        <ul class="mt-8 space-y-3 fade-in-up">
                            <li class="flex items-start gap-3 text-sm text-text-dark">
                                <i class="fa-solid fa-circle-check text-accent mt-0.5 shrink-0" />
                                <span>Secure family access to progress updates and evidence</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-text-dark">
                                <i class="fa-solid fa-circle-check text-accent mt-0.5 shrink-0" />
                                <span>Learner Repertoire Libraries shared with practitioners and families</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-text-dark">
                                <i class="fa-solid fa-circle-check text-accent mt-0.5 shrink-0" />
                                <span>Evidence for reviews, EHCP reporting, and stakeholder communication</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-text-dark">
                                <i class="fa-solid fa-circle-check text-accent mt-0.5 shrink-0" />
                                <span>Mand dictionaries to support consistent responses across home and school</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-24 bg-accent-light">
            <div class="container mx-auto px-6 text-center">
                <p class="section-tag fade-in-up">See It in Action</p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-primary max-w-3xl mx-auto leading-tight mt-2 mb-6 fade-in-up">
                    See how Development Beyond works for your setting.
                </h2>
                <p class="text-muted text-lg max-w-2xl mx-auto mb-10 fade-in-up">
                    Book a demo and we'll walk you through the platform in the context of your
                    organisation, caseload, and goals.
                </p>
                <div class="flex flex-wrap gap-4 justify-center fade-in-up">
                    <Link href="/book-a-demo" class="btn-primary">Book a Demo</Link>
                    <Link href="/contact" class="btn-outline">Get in Touch</Link>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
