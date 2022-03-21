import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emily Cowell Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Portfolio!" />
        <p className="description">
          temp
        </p>
      </main>

      <Footer />
    </div>
  )
}
