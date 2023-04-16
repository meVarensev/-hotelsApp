/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,tsx}"],
    theme: {
        extend: {
            container: {
                margin: '2rem',
            },
            width: {
                '409': '25.7rem',
            } ,
            height: {
                '382' : '23.9rem',
            }
        },
    },
    plugins: [],
}

