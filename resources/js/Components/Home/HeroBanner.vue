<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <section
        class="relative min-h-screen flex items-center overflow-hidden bg-primary"
        aria-label="Hero"
    >
        <!-- Background image with overlay -->
        <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/assets/images/hero-bg.png')"
            aria-hidden="true"
        />
        <div class="absolute inset-0 bg-primary/70" aria-hidden="true" />

        <!-- Content -->
        <div class="relative z-10 container mx-auto px-6 pt-32 pb-20">
            <div class="max-w-3xl">
                <!-- Small tag line -->
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-5 fade-in-up visible">
                    Simple Progress Tracking. Meaningful Outcomes.
                </p>

                <!-- Headline -->
                <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 fade-in-up visible" style="animation-delay: 0.1s">
                    Beyond Data. Beyond Targets.
                    <span class="text-accent">Beyond The Session.</span>
                </h1>

                <!-- Body -->
                <p class="text-white/80 text-lg leading-relaxed max-w-2xl mb-10 fade-in-up visible" style="animation-delay: 0.2s">
                    Development Beyond helps practitioners, families, and organisations understand
                    progress, demonstrate meaningful outcomes, and support the application of learning
                    across home, school, and community settings.
                </p>

                <!-- Buttons -->
                <div class="flex flex-wrap gap-4 fade-in-up visible" style="animation-delay: 0.3s">
                    <Link href="/contact" class="btn-accent">
                        Get Started
                    </Link>
                    <Link href="/who-we-support" class="btn-outline border-white text-white hover:bg-white hover:text-primary">
                        Who Do We Support
                    </Link>
                </div>

                <!-- Video placeholder (no active link until video is ready) -->
                <div class="flex items-center gap-4 mt-12 fade-in-up visible" style="animation-delay: 0.4s">
                    <button
                        class="w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        disabled
                        title="Video coming soon"
                        aria-label="Watch our video (coming soon)"
                    >
                        <i class="fa-solid fa-play text-white text-sm ml-0.5" />
                    </button>
                    <span class="text-white/70 text-sm font-medium">Watch Our Video</span>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <i class="fa-solid fa-chevron-down text-white/50 text-sm" />
        </div>
    </section>
</template>
