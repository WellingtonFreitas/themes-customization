import Document, { Html, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
// render():JSX.Element{
//     return (
//         <Html lang="pt">
//             <Head>
//                 <meta charSet="utf-8" />
//                 <link hre="”link da fonte”" rel="stylesheet" />
//                 <link rel="icon" href="”link do favcon”" />
//             </Head>
//             <body>
//                 <Mains />
//                 <NextScript />
//             </body>
//         </Html>

//     );
// }