/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // scan all React files
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffc727",
                dark: "#111111",
                
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                }
            },
            fontFamily: {
                tangerine: ['Tangerine', 'cursive'],
            },
            
        },
    },
plugins: [],
}
