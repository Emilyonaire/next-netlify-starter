import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'
import topbarStyles from '@components/layout.module.css'


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
          
          
          <ProjectAdRead imgSource="/images/closeEnough.jpg"
          imgAlt="Colour Guide"
          title="Colour Guide!"
          description="This is a colour guide!"
          link="#"
          lean="left"
          />
          <ProjectAdRead imgSource="/images/closeEnough.jpg"
          imgAlt="Colour Guide"
          title="Colour Guide!"
          description="This is a colour guide!"
          link="#"
          lean="right"
          />

          

        </Content>
      </main>

      <Footer />
    </div>
  )
}
