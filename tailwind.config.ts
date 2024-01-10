import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const { nextui } = require('@nextui-org/react')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                current: '#64748B',
                transparent: 'transparent',
                white: '#FFFFFF',
                black: '#1C2434',
                blackground: '#010101',
                body: '#64748B',
                step: '#252d48',
                bodydark: '#AEB7C0',
                bodydark1: '#DEE4EE',
                bodydark2: '#8A99AF',
                button: '#EF9F8F',
                primary: '#7fd5f8',
                secondary: '#FFFFFF',
                stroke: '#E2E8F0',
                gray: '#EFF4FB',
                graydark: '#333A48',
                'gray-2': '#F7F9FC',
                'gray-3': '#FAFAFA',
                whiten: '#F1F5F9',
                whiter: '#F5F7FD',
                boxdark: '#24303F',
                'boxdark-2': '#1A222C',
                strokedark: '#2E3A47',
                'form-strokedark': '#3d4d60',
                'form-input': '#1d2a39',
                'meta-1': '#DC3545',
                'meta-2': '#EFF2F7',
                'meta-3': '#10B981',
                'meta-4': '#313D4A',
                meta: '#259AE6',
                'meta-6': '#FFBA00',
                'meta-7': '#FF6766',
                'meta-8': '#F0950C',
                'meta-9': '#E5E7EB',
                success: '#219653',
                danger: '#D34053',
                warning: '#FFA70B',
            },
            screens: {
                '2xsm': '375px',
                xsm: '425px',
                '3xl': '2000px',
                ...defaultTheme.screens,
            },
            fontSize: {
                'title-xxl': ['54px', '65px'],
                'title-xl': ['36px', '45px'],
                'title-xl2': ['33px', '45px'],
                'title-lg': ['28px', '35px'],
                'title-md': ['24px', '30px'],
                'title-md2': ['26px', '30px'],
                'title-sm': ['20px', '26px'],
                'title-ssm': ['18px', '20px'],
                'title-sssm': ['16px', '18px'],
                'title-xsm': ['14px', '16px'],
                'title-xxsm': ['12px', '13px'],
                micro: ['9px', '10px'],
            },
            spacing: {
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                10.5: '2.625rem',
                11: '2.75rem',
                11.5: '2.875rem',
                12.5: '3.125rem',
                13: '3.25rem',
                13.5: '3.375rem',
                14: '3.5rem',
                14.5: '3.625rem',
                15: '3.75rem',
                15.5: '3.875rem',
                16: '4rem',
                16.5: '4.125rem',
                17: '4.25rem',
                17.5: '4.375rem',
                18: '4.5rem',
                18.5: '4.625rem',
                19: '4.75rem',
                19.5: '4.875rem',
                21: '5.25rem',
                21.5: '5.375rem',
                22: '5.5rem',
                22.5: '5.625rem',
                24.5: '6.125rem',
                25: '6.25rem',
                25.5: '6.375rem',
                26: '6.5rem',
                27: '6.75rem',
                27.5: '6.875rem',
                29: '7.25rem',
                29.5: '7.375rem',
                30: '7.5rem',
                31: '7.75rem',
                32.5: '8.125rem',
                34: '8.5rem',
                34.5: '8.625rem',
                35: '8.75rem',
                36.5: '9.125rem',
                37.5: '9.375rem',
                39: '9.75rem',
                39.5: '9.875rem',
                40: '10rem',
                42.5: '10.625rem',
                44: '11rem',
                45: '11.25rem',
                46: '11.5rem',
                47.5: '11.875rem',
                49: '12.25rem',
                50: '12.5rem',
                52: '13rem',
                52.5: '13.125rem',
                54: '13.5rem',
                54.5: '13.625rem',
                55: '13.75rem',
                55.5: '13.875rem',
                59: '14.75rem',
                60: '15rem',
                62.5: '15.625rem',
                65: '16.25rem',
                67: '16.75rem',
                67.5: '16.875rem',
                70: '17.5rem',
                72.5: '18.125rem',
                73: '18.25rem',
                75: '18.75rem',
                90: '22.5rem',
                94: '23.5rem',
                95: '23.75rem',
                100: '25rem',
                115: '28.75rem',
                125: '31.25rem',
                132.5: '33.125rem',
                150: '37.5rem',
                171.5: '42.875rem',
                180: '45rem',
                187.5: '46.875rem',
                203: '50.75rem',
                230: '57.5rem',
                242.5: '60.625rem',
            },
            maxWidth: {
                2.5: '0.625rem',
                3: '0.75rem',
                4: '1rem',
                11: '2.75rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                22.5: '5.625rem',
                25: '6.25rem',
                30: '7.5rem',
                34: '8.5rem',
                35: '8.75rem',
                40: '10rem',
                42.5: '10.625rem',
                44: '11rem',
                45: '11.25rem',
                70: '17.5rem',
                90: '22.5rem',
                94: '23.5rem',
                125: '31.25rem',
                132.5: '33.125rem',
                142.5: '35.625rem',
                150: '37.5rem',
                180: '45rem',
                203: '50.75rem',
                230: '57.5rem',
                242.5: '60.625rem',
                270: '67.5rem',
                280: '70rem',
                292.5: '73.125rem',
                300: '75rem',
                310: '77.5rem',
                320: '80rem',
                330: '82.5rem',
                340: '85rem',
                350: '87.5rem',
                360: '90rem',
                370: '92.5rem',
                380: '95rem',
            },
            maxHeight: {
                35: '8.75rem',
                70: '17.5rem',
                90: '22.5rem',
                550: '34.375rem',
                300: '18.75rem',
            },
            minWidth: {
                22.5: '5.625rem',
                25: '6.25rem',
                30: '7.5rem',
                42.5: '10.625rem',
                47.5: '11.875rem',
                75: '18.75rem',
            },
            zIndex: {
                999999: '999999',
                99999: '99999',
                9999: '9999',
                999: '999',
                99: '99',
                9: '9',
                1: '1',
            },
            opacity: {
                65: '.65',
            },
            transitionProperty: { width: 'width', stroke: 'stroke' },
            borderWidth: {
                6: '6px',
            },
            boxShadow: {
                default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
                card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
                'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
                switcher:
                    '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
                'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
                1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
                3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
                4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
                5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
                6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
                7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
                8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
            },
            dropShadow: {
                1: '0px 1px 0px #E2E8F0',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            backgroundImage: {
                'home-session-background':
                    "url('https://res.cloudinary.com/doorwkexf/image/upload/v1704762834/1687303502_en-idei-club-p-white-technology-background-dizain-75_scavhy.png')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography'), nextui()],
}
export default config
