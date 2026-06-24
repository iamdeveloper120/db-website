<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { ref } from 'vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const form = ref({
    name: '',
    email: '',
    organisation: '',
    organisationType: '',
    subscriptionInterest: '',
    expectedUsers: '',
    timeline: '',
    message: '',
    consent: false,
});

const submitted = ref(false);
const submitting = ref(false);

const orgTypes = ['School', 'Clinic', 'Organisation', 'Local Authority', 'Family', 'Other'];
const subscriptionOptions = ['Starter', 'Professional', 'Organisation', 'Not sure yet'];
const timelines = ['Immediate', '1–3 months', '3–6 months', 'Just exploring'];

const handleSubmit = async () => {
    submitting.value = true;
    await new Promise((r) => setTimeout(r, 800));
    submitted.value = true;
    submitting.value = false;
};
</script>

<template>
    <AppLayout title="Contact Sales" description="Have questions about features, implementation, or pricing? Our team is here to help.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Contact Sales</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Talk to our sales team.
                </h1>
                <p class="text-white/70 text-lg max-w-xl">
                    Have questions about features, implementation, or pricing?
                    Our team is here to help.
                </p>
            </div>
        </section>

        <!-- Form -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="max-w-2xl mx-auto">
                    <div v-if="submitted" class="bg-white rounded-2xl p-12 text-center shadow-sm fade-in-up visible">
                        <i class="fa-solid fa-circle-check text-accent text-5xl mb-6 block" />
                        <h2 class="font-heading text-2xl font-bold text-primary mb-3">Enquiry received!</h2>
                        <p class="text-muted">A member of our sales team will be in touch soon.</p>
                    </div>

                    <form
                        v-else
                        class="bg-white rounded-2xl p-10 shadow-sm fade-in-up"
                        @submit.prevent="handleSubmit"
                    >
                        <h2 class="font-heading text-2xl font-bold text-primary mb-8">Sales Enquiry</h2>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-text-dark mb-2">Full Name <span class="text-red-500">*</span></label>
                                <input id="name" v-model="form.name" type="text" required placeholder="Your full name"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-semibold text-text-dark mb-2">Email Address <span class="text-red-500">*</span></label>
                                <input id="email" v-model="form.email" type="email" required placeholder="your@email.com"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="organisation" class="block text-sm font-semibold text-text-dark mb-2">Organisation <span class="text-red-500">*</span></label>
                                <input id="organisation" v-model="form.organisation" type="text" required placeholder="Your organisation"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                            <div>
                                <label for="orgType" class="block text-sm font-semibold text-text-dark mb-2">Organisation Type</label>
                                <select id="orgType" v-model="form.organisationType"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                    <option value="" disabled>Select type</option>
                                    <option v-for="t in orgTypes" :key="t" :value="t">{{ t }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="sub" class="block text-sm font-semibold text-text-dark mb-2">Subscription Interest</label>
                                <select id="sub" v-model="form.subscriptionInterest"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                    <option value="" disabled>Select plan</option>
                                    <option v-for="s in subscriptionOptions" :key="s" :value="s">{{ s }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="users" class="block text-sm font-semibold text-text-dark mb-2">Expected Users / Learners</label>
                                <input id="users" v-model="form.expectedUsers" type="text" placeholder="e.g. 50 learners"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                            </div>
                        </div>

                        <div class="mb-6">
                            <label for="timeline" class="block text-sm font-semibold text-text-dark mb-2">Implementation Timeline</label>
                            <select id="timeline" v-model="form.timeline"
                                class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                <option value="" disabled>When are you looking to start?</option>
                                <option v-for="t in timelines" :key="t" :value="t">{{ t }}</option>
                            </select>
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-sm font-semibold text-text-dark mb-2">Questions or Comments</label>
                            <textarea id="message" v-model="form.message" rows="4"
                                placeholder="Tell us about your feature, pricing, or implementation questions..."
                                class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm resize-none" />
                        </div>

                        <div class="mb-8 flex items-start gap-3">
                            <input id="consent" v-model="form.consent" type="checkbox" required
                                class="mt-1 w-4 h-4 rounded border-muted text-primary focus:ring-primary" />
                            <label for="consent" class="text-sm text-muted">
                                I agree to Development Beyond Ltd contacting me regarding my sales enquiry.
                                I understand my data will be handled in accordance with their privacy policy.
                            </label>
                        </div>

                        <button type="submit" :disabled="submitting"
                            class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                            <i v-if="submitting" class="fa-solid fa-spinner fa-spin mr-2" />
                            {{ submitting ? 'Submitting...' : 'Send Enquiry' }}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
