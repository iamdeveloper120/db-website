<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Link } from '@inertiajs/vue3';

const mobileOpen = ref(false);
const scrolled = ref(false);
const mobileExpanded = ref(null);

const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
        children: [
            { label: 'Mission and Vision',  href: '/about#mission-vision' },
            { label: 'Values',              href: '/about#values' },
            { label: 'Leadership Team',     href: '/about#leadership-team' },
        ],
    },
    {
        label: 'Approach',
        href: '/approach',
        children: [
            { label: 'What We Do',            href: '/approach#what-we-do' },
            { label: 'How We Do It',          href: '/approach#how-we-do-it' },
            { label: 'Data Collection',       href: '/approach#data-collection' },
            { label: 'Data Analysis',         href: '/approach#data-analysis' },
            { label: 'Progress Tracking',     href: '/approach#progress-tracking' },
            { label: 'Reporting and Outcomes', href: '/approach#reporting' },
        ],
    },
    {
        label: 'Clients',
        href: '/who-we-support',
        children: [
            { label: 'Schools',   href: '/who-we-support#schools' },
            { label: 'Clinics',   href: '/who-we-support#clinics' },
            { label: 'Families',  href: '/who-we-support#families' },
        ],
    },
    {
        label: 'Pricing',
        href: '/pricing',
        children: [
            { label: 'Starter',       href: '/pricing#starter' },
            { label: 'Professional',  href: '/pricing#professional' },
            { label: 'Organisation',  href: '/pricing#organisation' },
        ],
    },
    {
        label: 'Contact Us',
        href: '/contact',
        children: [
            { label: 'Contact Sales', href: '/contact-sales' },
            { label: 'Book a Demo',   href: '/book-a-demo' },
        ],
    },
];

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const closeMobile = () => {
    mobileOpen.value = false;
    mobileExpanded.value = null;
};

const toggleMobileDropdown = (label) => {
    mobileExpanded.value = mobileExpanded.value === label ? null : label;
};
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'"
    >
        <div class="container mx-auto px-6 flex items-center justify-between">

            <!-- Logo -->
            <Link href="/" class="flex items-center shrink-0">
                <img
                    src="/assets/images/logo.jpg"
                    alt="Development Beyond"
                    class="h-12 w-auto object-contain"
                />
            </Link>

            <!-- Desktop Nav -->
            <nav class="hidden lg:flex items-center">
                <div
                    v-for="item in navItems"
                    :key="item.label"
                    class="relative group"
                >
                    <!-- Top-level link -->
                    <Link
                        :href="item.href"
                        class="flex items-center gap-1 text-sm font-medium px-3 py-4 transition-all duration-200"
                        :class="scrolled ? 'text-text-dark hover:text-primary' : 'text-white hover:text-accent'"
                    >
                        {{ item.label }}
                        <i
                            v-if="item.children"
                            class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover:rotate-180"
                        />
                    </Link>

                    <!-- Dropdown panel — pt-2 creates a mouse-bridge so hover doesn't break -->
                    <div
                        v-if="item.children"
                        class="absolute top-full left-0 pt-2 z-50"
                    >
                        <ul
                            class="w-[235px] rounded-xl bg-accent shadow-lg py-1.5
                                   opacity-0 pointer-events-none origin-top scale-y-[0.8]
                                   transition-all duration-300 ease-in-out
                                   group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-y-100"
                        >
                            <li v-for="child in item.children" :key="child.href">
                                <Link
                                    :href="child.href"
                                    class="block px-5 py-2 text-sm font-medium text-primary
                                           transition-all duration-200 hover:pl-[23px]"
                                >
                                    {{ child.label }}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Book a Demo CTA -->
            <div class="hidden lg:block shrink-0">
                <Link href="/book-a-demo" class="btn-primary text-sm">
                    Book a Demo
                </Link>
            </div>

            <!-- Mobile Hamburger -->
            <button
                class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
                @click="mobileOpen = !mobileOpen"
            >
                <span
                    class="block w-6 h-0.5 transition-all duration-300"
                    :class="[scrolled ? 'bg-primary' : 'bg-white', mobileOpen ? 'rotate-45 translate-y-2' : '']"
                />
                <span
                    class="block w-6 h-0.5 transition-all duration-300"
                    :class="[scrolled ? 'bg-primary' : 'bg-white', mobileOpen ? 'opacity-0' : '']"
                />
                <span
                    class="block w-6 h-0.5 transition-all duration-300"
                    :class="[scrolled ? 'bg-primary' : 'bg-white', mobileOpen ? '-rotate-45 -translate-y-2' : '']"
                />
            </button>
        </div>

        <!-- Mobile Menu -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-if="mobileOpen"
                class="lg:hidden bg-white shadow-xl border-t border-surface max-h-[80vh] overflow-y-auto"
            >
                <nav class="container mx-auto px-6 py-3">

                    <template v-for="item in navItems" :key="item.label">

                        <!-- No dropdown -->
                        <div v-if="!item.children" class="border-b border-surface">
                            <Link
                                :href="item.href"
                                class="block text-text-dark font-semibold text-base py-3 hover:text-primary transition-colors"
                                @click="closeMobile"
                            >
                                {{ item.label }}
                            </Link>
                        </div>

                        <!-- With dropdown (accordion) -->
                        <div v-else class="border-b border-surface">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-text-dark font-semibold text-base py-3 hover:text-primary transition-colors"
                                @click="toggleMobileDropdown(item.label)"
                            >
                                {{ item.label }}
                                <i
                                    class="fa-solid fa-chevron-down text-xs transition-transform duration-200"
                                    :class="mobileExpanded === item.label ? 'rotate-180 text-primary' : 'text-muted'"
                                />
                            </button>

                            <Transition
                                enter-active-class="transition-all duration-200 ease-out overflow-hidden"
                                enter-from-class="opacity-0 max-h-0"
                                enter-to-class="opacity-100 max-h-96"
                                leave-active-class="transition-all duration-150 ease-in overflow-hidden"
                                leave-from-class="opacity-100 max-h-96"
                                leave-to-class="opacity-0 max-h-0"
                            >
                                <div v-if="mobileExpanded === item.label" class="pb-2">
                                    <Link
                                        v-for="child in item.children"
                                        :key="child.href"
                                        :href="child.href"
                                        class="flex items-center gap-2 pl-4 pr-2 py-2 text-sm text-muted font-medium
                                               hover:text-primary hover:pl-6 transition-all border-l-2 border-accent ml-1 mb-0.5"
                                        @click="closeMobile"
                                    >
                                        {{ child.label }}
                                    </Link>
                                </div>
                            </Transition>
                        </div>

                    </template>

                    <Link
                        href="/book-a-demo"
                        class="btn-primary text-sm text-center mt-4 mb-2 w-full justify-center"
                        @click="closeMobile"
                    >
                        Book a Demo
                    </Link>
                </nav>
            </div>
        </Transition>
    </header>
</template>
