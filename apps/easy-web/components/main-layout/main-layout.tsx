import Head from 'next/head'
import Footer from '../footer/footer'
import Header from '../header/header'
import './main-layout.module.scss'

/* eslint-disable-next-line */
export interface MainLayoutProps {
  children: JSX.Element
  title?: string
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{props.title && ''}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      {props.children}
      {/* <Footer></Footer> */}
    </>
  )
}

export default MainLayout
