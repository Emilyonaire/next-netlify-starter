import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About!</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <style>
          .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            background-color: #2196F3;
            padding: 10px;
          }
          .grid-item {
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.8);
            padding: 20px;
            font-size: 30px;
            text-align: center;
          }
        </style> */}
      </Head>

      <main>
        <Header title="About" />
        <h1>Grid Elements</h1>

        <p>A Grid Layout must have a parent element with the <em>display</em> property set to <em>grid</em> or <em>inline-grid</em>.</p>

        <p>Direct child element(s) of the grid container automatically becomes grid items.</p>

        <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>  
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>  
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>  
        </div>
      </main>

      <Footer />
    </div>
  )
}
