import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'


export default function Home() {
  return (
    <div className="container" >
      <Topbar title="tittle"/>
      <Head>
        <title>Emily's Portfolio!</title>
        {/* <title>Emily's Site!</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content>
          <Header title="Welcome to my Site!" />
          <p className="description">
            TEMP TEMP TEMP
          </p>
          <a href="about">about</a>
          </Content>
      </main>

      <Footer />
    </div>
  )
}
