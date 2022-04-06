import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'

export default function Home() {
  return (
    <div className="container" >
      <Topbar title="Demo"/>
      <Head>
        <title>Emily's Site - Demo</title>
        {/* <title>Emily's Site!</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content className="mainDemoHeader">
          <Header title="Minigame!" />
          <p className="description">
          Here is a demo of my Unity/C# Skills.
          </p>
          

        </Content>
        <Content name="demo">

          <div className='unity-demo'>
            bruh
          </div>

          
        </Content>
      </main>

      <Footer />
    </div>
  )
}
