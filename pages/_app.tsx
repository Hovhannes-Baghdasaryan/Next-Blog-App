import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {ThemeProvider} from "next-themes"

import {SessionProvider as AuthProvider} from "next-auth/react"

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthProvider session={pageProps.session}>
            <ThemeProvider attribute="class" enableSystem={true}>
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthProvider>
    )
}
