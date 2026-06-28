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
        <div class="relative z-10 container mx-auto px-6 pt-32 pb-20 flex items-end justify-between gap-12">
            <!-- Left: text + buttons -->
            <div class="max-w-3xl">
                <!-- Small tag line -->
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-5 fade-in-up visible">
                    Data Collection. Progress Tracking. Meaningful Outcomes.
                </p>

                <!-- Headline -->
                <h1 class="font-heading text-4xl xl:text-5xl font-bold text-white leading-tight whitespace-nowrap pb-4 fade-in-up visible" style="animation-delay: 0.1s">
                    Beyond Data.
                </h1>
                <h1 class="font-heading text-4xl xl:text-5xl font-bold text-white leading-tight whitespace-nowrap pb-4 fade-in-up visible" style="animation-delay: 0.1s">
                    Beyond Tracking.
                </h1>
                <h1 class="font-heading text-4xl xl:text-5xl font-bold text-accent leading-tight mb-6 fade-in-up visible" style="animation-delay: 0.15s">
                    Beyond The Session.
                </h1>

                <!-- Body -->
                <p class="text-white/80 text-lg leading-relaxed max-w-2xl mb-10 fade-in-up visible" style="animation-delay: 0.2s">
                    Development Beyond helps practitioners, families, and organisations measure progress, demonstrate the impact of their work, and support the application of learning across home, school, and community settings.
                </p>

                <!-- Buttons -->
                <div class="flex flex-wrap gap-4 fade-in-up visible" style="animation-delay: 0.3s">
                    <Link href="/who-we-support" class="btn-accent bg-white hover:bg-primary hover:text-white">
                        Who Do We Support
                    </Link>
                    <Link href="/contact" class="btn-accent">
                        Get Started
                    </Link>
                </div>
            </div>

            <!-- Right: video circle -->
            <div class="hidden md:flex items-end shrink-0 pb-4 fade-in-up visible" style="animation-delay: 0.4s">
                <div
                    class="relative w-[130px] h-[130px] cursor-default"
                    title="Video coming soon"
                    aria-label="Watch our video (coming soon)"
                >
                    <!-- Rotating outer text ring -->
                    <svg
                        class="absolute inset-0 w-full h-full animate-spin-slow"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <circle cx="60" cy="60" r="59.5" fill="white" fill-opacity="0.1" stroke="white" stroke-opacity="0.1"/>
                        <defs>
                            <path id="textRingPath" d="M60,60m-44,0a44,44,0,1,1,88,0a44,44,0,1,1,-88,0"/>
                        </defs>
                        <text fill="white" font-size="10.5" font-weight="500" letter-spacing="3" font-family="Manrope,sans-serif">
                            <textPath href="#textRingPath">Watch Our Video • Watch Our Video •</textPath>
                        </text>
                    </svg>
                    <!-- Static play button in centre -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="w-[62px] h-[62px] rounded-full bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                            <i class="fa-solid fa-play text-white text-sm ml-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <i class="fa-solid fa-chevron-down text-white/50 text-sm" />
        </div>
    </section>
</template>
