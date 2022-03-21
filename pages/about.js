import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About" />
        <p className="description">
          temp
        </p>
        <a href="index">Home</a>
      </main>

      <Footer />
    </div>
  )
}