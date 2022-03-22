import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'

export default function Home() {
  return (
    <div className="container">
      <Topbar title="Yo yo yo uwu!"/>
      <Head>
        <title>Emily Cowell Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Portfolio!" />
        <p className="description">
          temp
        </p>
        <a href="about">about</a>
      </main>

      <Footer />
    </div>
  )
}
