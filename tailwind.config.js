module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Saira', 'ui-sans-serif', 'system-ui']
        },
        extend: {},
        colors: {
            gray: {
                100: '#EBEBF0',
                200: '#D8D8DC',
                300: '#BCBCC0',
                400: '#AEAEB2',
                500: '#8E8E93'
            },
            darkGray: {
                100: '#AEAEB2',
                200: '#7C7C80',
                300: '#545456',
                400: '#444446',
                500: '#363638'
            },
            lightPurple: {
                100: '#B1A1FF'
            },
            purple: {
                100: '#7305E8',
                200: '#6B05D8',
                300: '#6004C2',
                400: '#4D039C',
                500: '#2D025C'
            },
            black: {
                100: '#160315',
                500: '#090012'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
