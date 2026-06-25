<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <section class="py-24 bg-accent-light">
        <div class="container mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-16 items-center">

                <!-- Images: staggered overlap — Image 1 in flow, Image 2 overlaps bottom-right -->
                <div class="relative pb-20 fade-in-up">
                    <!-- Image 1: normal flow, pulls left to leave room for Image 2 -->
                    <div class="mr-[14%] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/assets/images/child-playing-with-family.png"
                            alt="Child playing with family"
                            class="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                        />
                    </div>
                    <!-- Image 2: absolutely positioned, overlaps bottom-right of Image 1 -->
                    <div class="absolute bottom-0 right-0 w-[54%] rounded-2xl overflow-hidden shadow-xl border-white">
                        <img
                            src="/assets/images/family-at-the-park.png"
                            alt="Family at the park"
                            class="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                        />
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
