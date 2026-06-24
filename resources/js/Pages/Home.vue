<script setup>
import AppLayout from '../Components/Layout/AppLayout.vue';
import HeroBanner from '../Components/Home/HeroBanner.vue';
import RollingTicker from '../Components/Home/RollingTicker.vue';
import WhySection from '../Components/Home/WhySection.vue';
import AboutSection from '../Components/Home/AboutSection.vue';
import WhoWeSupportSection from '../Components/Home/WhoWeSupportSection.vue';
import WhatWeDoSection from '../Components/Home/WhatWeDoSection.vue';
import MissionSection from '../Components/Home/MissionSection.vue';
import PricingPreviewSection from '../Components/Home/PricingPreviewSection.vue';
import TestimonialsSection from '../Components/Home/TestimonialsSection.vue';
import ClosingCTA from '../Components/Home/ClosingCTA.vue';
import { useScrollReveal } from '../composables/useScrollReveal';

useScrollReveal();
</script>

<template>
    <AppLayout
        title="Home"
        description="Development Beyond helps practitioners, families, and organisations understand progress, demonstrate meaningful outcomes, and support the application of learning across home, school, and community settings."
    >
        <HeroBanner />
        <RollingTicker />
        <WhySection />
        <AboutSection />
        <WhoWeSupportSection />
        <WhatWeDoSection />
        <MissionSection />
        <PricingPreviewSection />
        <TestimonialsSection />
        <ClosingCTA />
    </AppLayout>
</template>
