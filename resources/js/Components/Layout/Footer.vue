<script setup>
import { Link } from '@inertiajs/vue3';

const year = new Date().getFullYear();

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Approach', href: '/approach' },
    { label: 'Who We Support', href: '/who-we-support' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' },
];

const ctaLinks = [
    { label: 'Book a Demo', href: '/book-a-demo' },
    { label: 'Contact Sales', href: '/contact' },
];
</script>

<template>
    <footer class="bg-primary text-white">
        <div class="container mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                <!-- Brand column -->
                <div class="lg:col-span-2">
                    <Link href="/" class="inline-flex items-center gap-3 mb-6">
                        <img
                            src="/assets/images/logo-transparent.png"
                            alt="Development Beyond"
                            class="h-12 w-12 object-contain shrink-0"
                            style="background-color: white; border-radius: 1rem;"
                        />
                        <span class="font-heading font-medium text-sm text-white leading-tight">
                            Development<br>Beyond
                        </span>
                    </Link>
                    <p class="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
                       Development Beyond helps practitioners, families, and organisations measure progress, demonstrate the impact of their work, and support the application of learning across home, school, and community settings.
                    </p>
                    <div class="flex gap-4">
                        <Link href="/book-a-demo" class="btn-accent text-sm">
                            Book a Demo
                        </Link>
                        <Link href="/contact" class="btn-outline border-white text-white hover:bg-white hover:text-primary text-sm">
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="font-heading font-semibold text-base mb-5 text-accent">Quick Links</h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.href">
                            <Link
                                :href="link.href"
                                class="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                            >
                                {{ link.label }}
                            </Link>
                        </li>
                    </ul>
                </div>

                <!-- Get In Touch -->
                <div>
                    <h3 class="font-heading font-semibold text-base mb-5 text-accent">Get In Touch</h3>
                    <ul class="space-y-3">
                        <li v-for="link in ctaLinks" :key="link.href">
                            <Link
                                :href="link.href"
                                class="text-white/70 text-sm hover:text-accent transition-colors duration-200"
                            >
                                {{ link.label }}
                            </Link>
                        </li>
                    </ul>
                    <div class="mt-8 pt-6 border-t border-white/20">
                        <p class="text-white/50 text-xs">
                            Legal links (Privacy Policy, Terms, Cookie Policy) will be added once approved.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-white/20">
            <div class="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p class="text-white/50 text-xs">
                    &copy; {{ year }} Development Beyond Ltd. All rights reserved.
                </p>
                <p class="text-white/30 text-xs">
                    DBIS — Development Beyond Information System
                </p>
            </div>
        </div>
    </footer>
</template>
