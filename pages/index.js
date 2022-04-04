import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'


export default function Home() {
  return (
    <div className="container" >
      <Topbar title="page title"/>
      <Head>
        <title>Emily's Site!</title>
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
          
          <Content name="projects">

            <ProjectAdRead imgSource="/images/cropped.png"
            imgAlt="Colour Guide"
            title="Colour Guide!"
            description="This is a colour guide!"
            link="#"
            lean="left"
            />
            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="Colour Guide"
            title="Colour Guide!"
            description="This is a colour guide!"
            link="#"
            lean="center"
            />

            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="Colour Guide"
            title="Colour Guide!"
            description="This is a colour guide!"
            link="#"
            lean="right" 
            />

            
          </Content>

        </Content>
      </main>

      <Footer />
    </div>
  )
}
