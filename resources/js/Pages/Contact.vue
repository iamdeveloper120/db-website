<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { ref } from 'vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();

const form = ref({
    name: '',
    email: '',
    organisation: '',
    role: '',
    message: '',
    consent: false,
});

const submitted = ref(false);
const submitting = ref(false);

const roles = [
    'Family',
    'School',
    'Clinic',
    'Organisation',
    'Practitioner',
    'Other',
];

const handleSubmit = async () => {
    submitting.value = true;
    await new Promise((r) => setTimeout(r, 800));
    submitted.value = true;
    submitting.value = false;
};
</script>

<template>
    <AppLayout title="Contact Us" description="Whether you're exploring Development Beyond for the first time or looking for a more efficient way to track progress, we're here to help.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight mb-6">
                    We're here to help.
                </h1>
                <p class="text-white/70 text-lg max-w-xl">
                    Whether you're exploring Development Beyond for the first time or looking for a more
                    efficient way to track progress and demonstrate outcomes, we're here to help you find
                    the right solution for your needs.
                </p>
            </div>
        </section>

        <!-- Form -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="max-w-2xl mx-auto">
                    <div v-if="submitted" class="bg-white rounded-2xl p-12 text-center shadow-sm fade-in-up visible">
                        <i class="fa-solid fa-circle-check text-accent text-5xl mb-6 block" />
                        <h2 class="font-heading text-2xl font-bold text-primary mb-3">Message received!</h2>
                        <p class="text-muted">Thank you for reaching out. We'll be in touch shortly.</p>
                    </div>

                    <form
                        v-else
                        class="bg-white rounded-2xl p-10 shadow-sm fade-in-up"
                        @submit.prevent="handleSubmit"
                    >
                        <h2 class="font-heading text-2xl font-bold text-primary mb-8">Send us a message</h2>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-text-dark mb-2">Full Name <span class="text-red-500">*</span></label>
                                <input
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    required
                                    placeholder="Your full name"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm"
                                />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-semibold text-text-dark mb-2">Email Address <span class="text-red-500">*</span></label>
                                <input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm"
                                />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="organisation" class="block text-sm font-semibold text-text-dark mb-2">Organisation</label>
                                <input
                                    id="organisation"
                                    v-model="form.organisation"
                                    type="text"
                                    placeholder="Your organisation"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm"
                                />
                            </div>
                            <div>
                                <label for="role" class="block text-sm font-semibold text-text-dark mb-2">Your Role</label>
                                <select
                                    id="role"
                                    v-model="form.role"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm"
                                >
                                    <option value="" disabled>Select your role</option>
                                    <option v-for="r in roles" :key="r" :value="r">{{ r }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-sm font-semibold text-text-dark mb-2">Message <span class="text-red-500">*</span></label>
                            <textarea
                                id="message"
                                v-model="form.message"
                                required
                                rows="5"
                                placeholder="How can we help you?"
                                class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm resize-none"
                            />
                        </div>

                        <div class="mb-8 flex items-start gap-3">
                            <input
                                id="consent"
                                v-model="form.consent"
                                type="checkbox"
                                required
                                class="mt-1 w-4 h-4 rounded border-muted text-primary focus:ring-primary"
                            />
                            <label for="consent" class="text-sm text-muted">
                                I agree to Development Beyond Ltd contacting me regarding my enquiry.
                                I understand my data will be handled in accordance with their privacy policy.
                            </label>
                        </div>

                        <button
                            type="submit"
                            :disabled="submitting"
                            class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            <i v-if="submitting" class="fa-solid fa-spinner fa-spin mr-2" />
                            {{ submitting ? 'Sending...' : 'Send Message' }}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    </AppLayout>
</template>
