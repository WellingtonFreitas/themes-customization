import 'styled-components'


export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,

            background: string,
            text: string
        }
    }
}