import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', ...defaultTheme.fontFamily.sans],
                heading: ['Sora', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#243E5C',
                'primary-light': '#385A7D',
                accent: '#C7F1DE',
                'accent-light': '#DDF7EB',
                surface: '#E8EEF3',
                'text-dark': '#1E2938',
                muted: '#7D8FA3',
            },
        },
    },

    plugins: [forms, typography],
};
