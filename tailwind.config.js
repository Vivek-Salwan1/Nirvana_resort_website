/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'nature-green': '#1A4D2E',
                'nature-green-light': '#2C5F2D',
                'soft-white': '#F9F9F9',
                'light-beige': '#F4F1EA',
                'muted-gray': '#4A4A4A',
                'accent-yellow': '#E6C229',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
                display: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
