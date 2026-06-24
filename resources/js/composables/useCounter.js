import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useCounter(target, duration = 2000) {
    const count = ref(0);
    let observer = null;
    let animationFrame = null;

    const animate = (el) => {
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            count.value = Math.floor(progress * target);
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                count.value = target;
            }
        };
        animationFrame = requestAnimationFrame(step);
    };

    const elRef = ref(null);

    onMounted(() => {
        if (typeof window === 'undefined') return;
        observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animate(entries[0].target);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (elRef.value) observer.observe(elRef.value);
    });

    onBeforeUnmount(() => {
        if (observer) observer.disconnect();
        if (animationFrame) cancelAnimationFrame(animationFrame);
    });

    return { count, elRef };
}
