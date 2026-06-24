import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useScrollReveal(selector = '.fade-in-up', threshold = 0.15) {
    if (typeof window === 'undefined') return;

    let observer = null;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    });

    onBeforeUnmount(() => {
        if (observer) observer.disconnect();
    });
}
