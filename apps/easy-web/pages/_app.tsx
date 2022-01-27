import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.scss'
import '@momo/shared/ui/styles'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to easy-web!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
