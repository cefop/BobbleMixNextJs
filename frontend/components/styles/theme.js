import { extendTheme, theme } from '@chakra-ui/react';

const customTheme = extendTheme({
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            100: '#1D1D1B',
            200: '#F29100',
            300: '#FAB752',
        },
        orange: {
            50: '#f5e9ff',
            100: '#dac1f3',
            200: '#c098e7',
            300: '#a571dc',
            400: '#8c48d0',
            500: '#F29100', // btn color
            600: '#FAB752', //  btn color on hover
            700: '#E0921D', // btn active
            800: '#260f40',
            900: '#10031a',
        },
        gray: '#0E161B40',
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                background: '#1d1d1b',
                color: '#FEFEFE',
                padding: 0,
                margin: 0,
                fontFamily:
                    'Rubik, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
            },
            // styles for the `a`
            a: {
                color: 'bbmNavy.100',
                _hover: {
                    color: '#FEFEFE',
                    textDecoration: 'none',
                },
            },
        },
    },
});

module.exports = { customTheme };
