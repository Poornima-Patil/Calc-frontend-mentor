/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'theme1-bg': '#191f32',
                'theme1-togglebg': 'hsl(223, 31%, 20%)',
                'theme1-screenbg': '#3B4664',
                'theme1-keypadbg': '#191F32',
                'theme1-reset-delbg': '#697492',
                'theme1-equalsbg': '#d13f30',
                'theme2-screenbg': '#f0f0f0',
                'theme2-output-bg': '#efefef',
                'theme2-keypad-bg': '#e7e6e7',
                'theme2-reset-delbg': '#8dbbbf',
                'theme2-equalsbg': '#d13f30',

            },
        },
    },
    plugins: [],
}