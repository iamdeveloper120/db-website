<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination, Autoplay];

const testimonials = [
    {
        quote: 'Development Beyond has completely changed how we demonstrate progress to families. The visual summaries are clear, easy to understand, and save us hours every week.',
        name: 'Sarah T.',
        role: 'ABA Programme Supervisor',
    },
    {
        quote: 'Having everything in one place — goals, data, evidence, and reports — means our team can focus on what matters most: supporting the learner.',
        name: 'Michael R.',
        role: 'School SENCO',
    },
    {
        quote: 'As a parent, being able to see what my child is working on and how I can support learning at home has been invaluable. The family access is wonderful.',
        name: 'Claire M.',
        role: 'Parent',
    },
];
</script>

<template>
    <section class="py-24 bg-primary relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center opacity-10" aria-hidden="true" />

        <div class="relative z-10 container mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-accent font-semibold text-sm uppercase tracking-widest mb-3 fade-in-up">Testimonials</p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white fade-in-up">
                    What our users say
                </h2>
            </div>

            <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="32"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                class="testimonials-swiper pb-14"
            >
                <SwiperSlide v-for="item in testimonials" :key="item.name">
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full flex flex-col">
                        <i class="fa-solid fa-quote-left text-accent text-2xl mb-6" />
                        <p class="text-white/90 text-base leading-relaxed flex-1 mb-8">{{ item.quote }}</p>
                        <div>
                            <p class="font-heading font-semibold text-white">{{ item.name }}</p>
                            <p class="text-accent text-sm">{{ item.role }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style>
.testimonials-swiper .swiper-wrapper {
    align-items: stretch;
}
.testimonials-swiper .swiper-slide {
    height: auto;
}
.testimonials-swiper .swiper-pagination-bullet {
    background: rgba(255,255,255,0.5);
    opacity: 1;
}
.testimonials-swiper .swiper-pagination-bullet-active {
    background: #C7F1DE;
}
</style>
