<script setup>
const steps = [
    {
        step: '01',
        title: 'Set Goals and Outcomes',
        body: 'Create domains, goals, and targets that reflect the outcomes being worked towards. Targets can be linked to medium- and long-term goals.',
    },
    {
        step: '02',
        title: 'Collect Information',
        body: 'Collect information live during sessions using mobile devices. Supported methods include frequency, duration, trial-by-trial, task analysis, and evidence for learning journals.',
    },
    {
        step: '03',
        title: 'Analyse Progress',
        body: 'Information is automatically organised into visual summaries and graphs, reducing the time required to review performance and identify trends.',
    },
    {
        step: '04',
        title: 'Track Progress',
        body: 'Monitor performance across short-term targets, medium-term goals, and long-term outcome areas with progress alerts when learners are not on track.',
    },
    {
        step: '05',
        title: 'Evidence of Learning',
        body: 'Journal entries, photographs, permanent products, and session notes recorded alongside performance data provide meaningful evidence of learning over time.',
    },
    {
        step: '06',
        title: 'Share Outcomes',
        body: 'Information can be shared directly with families and stakeholders through secure access and reporting tools, keeping everyone informed and aligned.',
    },
];
</script>

<template>
    <section class="py-24 bg-surface">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-start">
                <!-- Left content -->
                <div class="lg:sticky lg:top-32">
                    <p class="section-tag fade-in-up">How Development Beyond Works</p>
                    <h2 class="section-title mt-2 mb-6 fade-in-up">
                        Transforming information into meaningful action.
                    </h2>
                    <p class="section-subtitle mb-8 fade-in-up">
                        Development Beyond provides a configurable framework for collecting information,
                        monitoring progress, and sharing outcomes. Whether supporting education,
                        intervention, therapy, or skill development.
                    </p>
                    <div class="bg-primary rounded-2xl p-8 fade-in-up">
                        <img
                            src="/assets/images/child-paying-for-book.png"
                            alt="Child paying for a book — independence and everyday skills"
                            class="w-full rounded-xl object-cover aspect-video"
                            loading="lazy"
                        />
                    </div>
                </div>

                <!-- Steps -->
                <div class="space-y-6">
                    <div
                        v-for="(step, i) in steps"
                        :key="step.step"
                        class="flex gap-6 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-up"
                        :style="`animation-delay: ${i * 0.08}s`"
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
</template>
