<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const form = ref({
    name: '',
    email: '',
    organisation: '',
    organisationType: '',
    teamSize: '',
    currentSolution: '',
    message: '',
    consent: false,
});

const submitted = ref(false);
const submitting = ref(false);

const orgTypes = ['School', 'Clinic / ABA Provider', 'Multi-site Organisation', 'Local Authority', 'Family', 'Other'];
const teamSizes = ['1–5 practitioners', '6–20 practitioners', '21–50 practitioners', '50+ practitioners'];

const handleSubmit = async () => {
    submitting.value = true;
    await new Promise((r) => setTimeout(r, 800));
    submitted.value = true;
    submitting.value = false;
};

const nextSteps = [
    {
        icon: 'fa-solid fa-calendar-check',
        title: "We'll reach out within 24 hours",
        body: 'A member of our sales team will contact you to arrange a conversation at a time that works for you.',
    },
    {
        icon: 'fa-solid fa-comments',
        title: 'Discovery call',
        body: "We'll spend 20–30 minutes understanding your setting, your needs, and the outcomes you're working towards.",
    },
    {
        icon: 'fa-solid fa-file-invoice',
        title: 'Tailored proposal',
        body: "We'll put together a plan and pricing recommendation based on your specific situation.",
    },
];
</script>

<template>
    <AppLayout title="Contact Sales" description="Speak to our sales team about a plan for your organisation. We'll help you find the right fit for your caseload, team size, and goals.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Contact Sales</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Interested in a DBIS subscription?
                </h1>
                <p class="text-white/70 text-lg max-w-2xl">
                    Tell us about your organisation and we'll get back to you with a recommendation
                    tailored to your setting, caseload, and goals.
                </p>
            </div>
        </section>

        <!-- What happens next -->
        <section class="py-16 bg-white border-b border-surface">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-3 gap-8">
                    <div
                        v-for="(step, i) in nextSteps"
                        :key="step.title"
                        class="flex gap-5 fade-in-up"
                        :style="`animation-delay: ${i * 0.1}s`"
                    >
                        <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <i :class="[step.icon, 'text-primary']" />
                        </div>
                        <div>
                            <h3 class="font-heading font-bold text-base text-primary mb-2">{{ step.title }}</h3>
                            <p class="text-muted text-sm leading-relaxed">{{ step.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="max-w-2xl mx-auto">
                    <div v-if="submitted" class="bg-white rounded-2xl p-12 text-center shadow-sm fade-in-up visible">
                        <i class="fa-solid fa-circle-check text-accent text-5xl mb-6 block" />
                        <h2 class="font-heading text-2xl font-bold text-primary mb-3">Enquiry received!</h2>
                        <p class="text-muted mb-6">
                            Thank you for getting in touch. A member of our sales team will contact you
                            within 24 hours to arrange a conversation.
                        </p>
                        <Link href="/" class="btn-outline">Back to Home</Link>
                    </div>

                    <form
                        v-else
                        class="bg-white rounded-2xl p-10 shadow-sm fade-in-up"
                        @submit.prevent="handleSubmit"
                    >
                        <h2 class="font-heading text-2xl font-bold text-primary mb-2">Tell Us About Your Organisation</h2>
                        <p class="text-muted text-sm mb-8">The more detail you provide, the better we can tailor our DBIS subscription recommendation.</p>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-text-dark mb-2">Full Name <span class="text-red-500">*</span></label>
                                <input id="name" v-model="form.name" type="text" required placeholder="Your full name"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-semibold text-text-dark mb-2">Work Email <span class="text-red-500">*</span></label>
                                <input id="email" v-model="form.email" type="email" required placeholder="your@email.com"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="organisation" class="block text-sm font-semibold text-text-dark mb-2">Organisation Name <span class="text-red-500">*</span></label>
                                <input id="organisation" v-model="form.organisation" type="text" required placeholder="Your organisation"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                            <div>
                                <label for="orgType" class="block text-sm font-semibold text-text-dark mb-2">Organisation Type <span class="text-red-500">*</span></label>
                                <select id="orgType" v-model="form.organisationType" required
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                    <option value="" disabled>Select type</option>
                                    <option v-for="t in orgTypes" :key="t" :value="t">{{ t }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="teamSize" class="block text-sm font-semibold text-text-dark mb-2">Team Size</label>
                                <select id="teamSize" v-model="form.teamSize"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                    <option value="" disabled>Select team size</option>
                                    <option v-for="s in teamSizes" :key="s" :value="s">{{ s }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="currentSolution" class="block text-sm font-semibold text-text-dark mb-2">Current Solution</label>
                                <input id="currentSolution" v-model="form.currentSolution" type="text" placeholder="e.g. spreadsheets, paper, other app"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-sm font-semibold text-text-dark mb-2">Anything else you'd like us to know?</label>
                            <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us about your goals, challenges, or any specific requirements..."
                                class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm resize-none" />
                        </div>

                        <div class="mb-8 flex items-start gap-3">
                            <input id="consent" v-model="form.consent" type="checkbox" required
                                class="mt-1 w-4 h-4 rounded border-muted text-primary focus:ring-primary" />
                            <label for="consent" class="text-sm text-muted">
                                I agree to Development Beyond Ltd contacting me to discuss my sales enquiry.
                                I understand my data will be handled in accordance with their privacy policy.
                            </label>
                        </div>

                        <button type="submit" :disabled="submitting"
                            class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                            <i v-if="submitting" class="fa-solid fa-spinner fa-spin mr-2" />
                            {{ submitting ? 'Submitting...' : 'Submit Enquiry' }}
                        </button>

                        <p class="text-center text-muted text-xs mt-4">
                            Prefer a demo first?
                            <Link href="/book-a-demo" class="text-primary font-semibold hover:underline">Book a demo instead</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
