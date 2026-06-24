<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const page = usePage();
const mobileOpen = ref(false);
const scrolled = ref(false);

const allNavItems = [
    { label: 'Home',            href: '/',               locked: false },
    { label: 'About Us',        href: '/about',          locked: false },
    { label: 'Approach',        href: '/approach',       locked: true  },
    { label: 'Who We Support',  href: '/who-we-support', locked: true  },
    { label: 'Pricing',         href: '/pricing',        locked: true  },
    { label: 'Contact Us',      href: '/contact',        locked: true  },
];

const navItems = computed(() =>
    page.props.pagesLocked
        ? allNavItems.filter((item) => !item.locked)
        : allNavItems
);

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const closeMobile = () => { mobileOpen.value = false; };
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
            <nav class="hidden lg:flex items-center gap-8">
                <Link
                    v-for="item in navItems"
                    :key="item.name"
                    :href="item.href"
                    class="text-sm font-semibold transition-colors duration-200"
                    :class="[
                        scrolled ? 'text-text-dark hover:text-primary' : 'text-white hover:text-accent',
                        $page.url === item.href ? (scrolled ? 'text-primary' : 'text-accent') : ''
                    ]"
                >
                    {{ item.label }}
                </Link>
            </nav>

            <!-- Book a Demo CTA -->
            <div v-if="!page.props.pagesLocked" class="hidden lg:block">
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
                    :class="[
                        scrolled ? 'bg-primary' : 'bg-white',
                        mobileOpen ? 'rotate-45 translate-y-2' : ''
                    ]"
                />
                <span
                    class="block w-6 h-0.5 transition-all duration-300"
                    :class="[scrolled ? 'bg-primary' : 'bg-white', mobileOpen ? 'opacity-0' : '']"
                />
                <span
                    class="block w-6 h-0.5 transition-all duration-300"
                    :class="[
                        scrolled ? 'bg-primary' : 'bg-white',
                        mobileOpen ? '-rotate-45 -translate-y-2' : ''
                    ]"
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
                class="lg:hidden bg-white shadow-xl border-t border-surface"
            >
                <nav class="container mx-auto px-6 py-6 flex flex-col gap-4">
                    <Link
                        v-for="item in navItems"
                        :key="item.name"
                        :href="item.href"
                        class="text-text-dark font-semibold text-base py-2 border-b border-surface hover:text-primary transition-colors"
                        :class="$page.url === item.href ? 'text-primary' : ''"
                        @click="closeMobile"
                    >
                        {{ item.label }}
                    </Link>
                    <Link
                        v-if="!page.props.pagesLocked"
                        href="/book-a-demo"
                        class="btn-primary text-sm text-center mt-2"
                        @click="closeMobile"
                    >
                        Book a Demo
                    </Link>
                </nav>
            </div>
        </Transition>
    </header>
</template>
