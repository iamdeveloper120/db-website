<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <section class="py-24 bg-surface">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">

                <!-- Images grid -->
                <div class="relative grid grid-cols-2 gap-4 pb-10 fade-in-up">
                    <div class="rounded-2xl overflow-hidden aspect-[3/4]">
                        <img
                            src="/assets/images/child-playing-with-family.png"
                            alt="Child playing with family"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div class="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                        <img
                            src="/assets/images/family-at-the-park.png"
                            alt="Family at the park"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <!-- Stats badge -->
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 whitespace-nowrap z-10">
                        <div class="text-center">
                            <p class="font-heading font-bold text-2xl text-accent" style="letter-spacing: 0">DBIS</p>
                            <p class="text-white/70 text-xs" style="letter-spacing: 0">Development Beyond<br>Information System</p>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="pt-8 lg:pt-0">
                    <p class="section-tag fade-in-up">About Development Beyond</p>
                    <h2 class="section-title mt-2 mb-6 fade-in-up" style="animation-delay: 0.1s">
                        Pioneering progress tracking to transform information into meaningful action.
                    </h2>
                    <p class="section-subtitle mb-6 fade-in-up" style="animation-delay: 0.2s">
                        Development Beyond was created with a simple belief: meaningful outcomes should
                        be visible, understandable, and transferable beyond the instructional environment.
                    </p>
                    <p class="text-muted leading-relaxed mb-6 fade-in-up" style="animation-delay: 0.25s">
                        We believe progress is about more than targets mastered. It is about developing
                        skills that make a meaningful difference across home, school, community, and
                        everyday life.
                    </p>
                    <p class="text-muted leading-relaxed mb-8 fade-in-up" style="animation-delay: 0.3s">
                        That belief continues to shape everything we build.
                    </p>

                    <ul class="space-y-3 mb-8 fade-in-up" style="animation-delay: 0.35s">
                        <li
                            v-for="point in ['Evidence-Informed Decisions', 'Meaningful Outcomes', 'Family Engagement', 'Real-World Generalisation']"
                            :key="point"
                            class="flex items-center gap-3 text-text-dark font-medium"
                        >
                            <i class="fa-solid fa-circle-check text-accent text-lg shrink-0" />
                            {{ point }}
                        </li>
                    </ul>

                    <Link href="/about" class="btn-primary fade-in-up" style="animation-delay: 0.4s">Learn More About Us</Link>
                </div>
            </div>
        </div>
    </section>
</template>
