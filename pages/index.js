import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'


export default function Home() {
  return (
    <div className="container" >
      <Topbar title="Yo yo yo uwu!"/>
      <Head>
        <title>;uihe Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content>
          <Header title="Welcome to my Portfolio!" />
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
