import { onMounted, onBeforeUnmount } from 'vue';

export function useMagicCursor() {
    if (typeof window === 'undefined') return;

    let cursor = null;
    let cursorText = null;
    let pos = { x: -200, y: -200 };
    let mouse = { x: -200, y: -200 };
    let rafId = null;

    function lerp(a, b, n) {
        return (1 - n) * a + n * b;
    }

    function createElements() {
        cursor = document.createElement('div');
        cursor.className = 'cb-cursor';
        cursorText = document.createElement('div');
        cursorText.className = 'cb-cursor-text';
        cursor.appendChild(cursorText);
        document.body.appendChild(cursor);
    }

    function addState(state) {
        cursor.classList.add(state);
    }

    function removeState(state) {
        cursor.classList.remove(state);
    }

    // Delegated mouseenter / mouseleave via mouseover / mouseout + relatedTarget check
    function delegate(e, selector, fn) {
        const el = e.target.closest(selector);
        if (!el) return;
        // Only fire when entering/leaving the element from/to outside (not moving between children)
        if (e.relatedTarget && el.contains(e.relatedTarget)) return;
        fn(el);
    }

    function onMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        cursor.classList.add('-visible');
    }

    function onMouseDown() { addState('-active'); }
    function onMouseUp() { removeState('-active'); }
    function onDocLeave() { cursor.classList.remove('-visible'); }

    function onOver(e) {
        // Links / form controls → pointer state
        delegate(e, 'a, input, textarea, button, select', () => addState('-pointer'));
        // Headings (h1, h2) → opaque circle (mix-blend-mode: exclusion magnify effect)
        delegate(e, 'h1, h2', () => addState('-opaque'));
        // Explicit data-cursor attribute overrides
        delegate(e, '[data-cursor]', (el) => addState(el.dataset.cursor));
        // data-cursor-text shows a text label inside the circle
        delegate(e, '[data-cursor-text]', (el) => {
            cursorText.textContent = el.dataset.cursorText;
            addState('-text');
        });
    }

    function onOut(e) {
        delegate(e, 'a, input, textarea, button, select', () => removeState('-pointer'));
        delegate(e, 'h1, h2', () => removeState('-opaque'));
        delegate(e, '[data-cursor]', (el) => removeState(el.dataset.cursor));
        delegate(e, '[data-cursor-text]', () => {
            cursorText.textContent = '';
            removeState('-text');
        });
    }

    function loop() {
        pos.x = lerp(pos.x, mouse.x, 0.15);
        pos.y = lerp(pos.y, mouse.y, 0.15);
        if (cursor) {
            cursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
        rafId = requestAnimationFrame(loop);
    }

    onMounted(() => {
        createElements();
        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onDocLeave);
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);
        loop();
    });

    onBeforeUnmount(() => {
        if (rafId) cancelAnimationFrame(rafId);
        if (cursor) cursor.remove();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseleave', onDocLeave);
        document.removeEventListener('mouseover', onOver);
        document.removeEventListener('mouseout', onOut);
    });
}
