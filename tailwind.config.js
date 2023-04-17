import tailwind_scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {

    plugins: [
        tailwind_scrollbar()
    ],
    variants: {
        scrollbar: ['rounded']
    },
    content: ["./src/**/*.{html,tsx}"],
    theme: {
        extend: {
            container: {
                margin: '2rem',
            },
            width: {
                '409': '25.7rem',
            },
            height: {
                '382': '23.9rem',
            }
        },
    }

}

