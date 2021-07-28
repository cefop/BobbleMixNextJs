import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        bbmSea: {
            100: 'rgba(33,113,116,1)',
            200: 'rgba(6,47,65,1)',
        },
        bbmNavy: {
            100: '#324650',
            200: '#142128',
            300: '#0d161b',
        },
        bbmSun: {
            100: '#ffc755',
        },
        orange: {
            200: '#ed9500',
        },
        gray: '#0E161B40',
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                color: '#FEFEFE',
                padding: 0,
                margin: 0,
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
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
