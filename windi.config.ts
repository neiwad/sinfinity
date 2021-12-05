import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
    theme: {
        extend: {
            colors: {
                grey: '#27262c',
                purple: '#31327A',
                bluegray: '#BED8DE',
                salmon: "#FE9D89"
            },
            borderRadius: {
                rounded: '20px'
            }
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            const custom = {
                '.btn': {
                    padding: '0.5rem 1.5rem',
                    borderRadius: '.50rem',
                    fontWeight: '400',
                },
                '.btn-primary': {
                    'backgroundColor': '#31327A',
                    'color': '#fff',
                    '&:hover': {
                        backgroundColor: '#31327A70',
                    },
                },
                '.title-1': {
                    fontSize: '4rem',
                    color: '#31327A',
                    fontWeight: '800'
                }
            }
            addComponents(custom)
        })
    ]
})