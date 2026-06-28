<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useScrollReveal } from '../composables/useScrollReveal';
import RollingTicker from '../Components/Home/RollingTicker.vue';

useScrollReveal();

const form = ref({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: '',
    consent: false,
});

const submitted = ref(false);
const submitting = ref(false);

const subjects = [
    'General enquiry',
    'Product question',
    'Technical support',
    'Feedback',
    'Partnership',
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
    <AppLayout title="Contact Us" description="Get in touch with the Development Beyond team. We'd love to hear from you.">

        <!-- Page Hero -->
        <section class="pt-40 pb-20 bg-primary">
            <div class="relative z-10 container mx-auto px-6">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
                    Ask us a question or request information.
                </h1>
                <p class="text-white/70 text-lg max-w-xl">
                    Have a question about Development Beyond, want to find out more about the platform,
                    or need help with something? We'd love to hear from you.
                </p>
            </div>
        </section>
        <RollingTicker />

        <!-- Contact form + info -->
        <section class="py-24 bg-surface">
            <div class="container mx-auto px-6">
                <div class="grid lg:grid-cols-3 gap-12">

                    <!-- Sidebar -->
                    <div class="space-y-8">
                        <div class="bg-white rounded-2xl p-8 shadow-sm fade-in-up">
                            <h2 class="font-heading font-bold text-xl text-primary mb-6">Other ways to reach us</h2>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <i class="fa-solid fa-envelope text-primary text-sm" />
                                    </div>
                                    <div>
                                        <p class="font-semibold text-text-dark text-sm mb-1">Email</p>
                                        <p class="text-muted text-sm">info@developmentbeyond.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-primary rounded-2xl p-8 fade-in-up">
                            <h3 class="font-heading font-bold text-lg text-white mb-3">Looking for a demo?</h3>
                            <p class="text-white/70 text-sm leading-relaxed mb-6">
                                If you'd like to see Development Beyond in action, book a dedicated demo
                                with one of our team.
                            </p>
                            <Link href="/book-a-demo" class="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-accent-light transition-colors duration-300">
                                Book a Demo
                            </Link>
                        </div>

                    </div>

                    <!-- Form -->
                    <div class="lg:col-span-2">
                        <div v-if="submitted" class="bg-white rounded-2xl p-12 text-center shadow-sm fade-in-up visible">
                            <i class="fa-solid fa-circle-check text-accent text-5xl mb-6 block" />
                            <h2 class="font-heading text-2xl font-bold text-primary mb-3">Message received!</h2>
                            <p class="text-muted">Thanks for reaching out. We'll get back to you within 1–2 business days.</p>
                        </div>

                        <form
                            v-else
                            class="bg-white rounded-2xl p-10 shadow-sm fade-in-up"
                            @submit.prevent="handleSubmit"
                        >
                            <h2 class="font-heading text-2xl font-bold text-primary mb-8">Send Us a Message</h2>

                            <div class="grid sm:grid-cols-2 gap-6 mb-6">
                                <div class="min-w-0">
                                    <label for="name" class="block text-sm font-semibold text-text-dark mb-2">Full Name <span class="text-red-500">*</span></label>
                                    <input id="name" v-model="form.name" type="text" required placeholder="Your full name"
                                        class="w-full min-w-0 px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                                </div>
                                <div class="min-w-0">
                                    <label for="email" class="block text-sm font-semibold text-text-dark mb-2">Email Address <span class="text-red-500">*</span></label>
                                    <input id="email" v-model="form.email" type="email" required placeholder="your@email.com"
                                        class="w-full min-w-0 px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                                </div>
                            </div>

                            <div class="grid sm:grid-cols-2 gap-6 mb-6">
                                <div class="min-w-0">
                                    <label for="organisation" class="block text-sm font-semibold text-text-dark mb-2">Organisation</label>
                                    <input id="organisation" v-model="form.organisation" type="text" placeholder="Your organisation (optional)"
                                        class="w-full min-w-0 px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm" />
                                </div>
                                <div class="min-w-0">
                                    <label for="subject" class="block text-sm font-semibold text-text-dark mb-2">Subject</label>
                                    <select id="subject" v-model="form.subject"
                                        class="w-full min-w-0 px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm">
                                        <option value="" disabled>Select a subject</option>
                                        <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-6">
                                <label for="message" class="block text-sm font-semibold text-text-dark mb-2">Message <span class="text-red-500">*</span></label>
                                <textarea id="message" v-model="form.message" required rows="6" placeholder="How can we help?"
                                    class="w-full px-4 py-3 rounded-xl border border-surface bg-surface focus:outline-none focus:border-primary focus:bg-white transition-colors text-text-dark text-sm resize-none" />
                            </div>

                            <div class="mb-8 flex items-start gap-3">
                                <input id="consent" v-model="form.consent" type="checkbox" required
                                    class="mt-1 w-4 h-4 rounded border-muted text-primary focus:ring-primary" />
                                <label for="consent" class="text-sm text-muted">
                                    I agree to Development Beyond Ltd contacting me in response to this message.
                                    I understand my data will be handled in accordance with their privacy policy.
                                </label>
                            </div>

                            <button type="submit" :disabled="submitting"
                                class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                                <i v-if="submitting" class="fa-solid fa-spinner fa-spin mr-2" />
                                {{ submitting ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    </AppLayout>
</template>
