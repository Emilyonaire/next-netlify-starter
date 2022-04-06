import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'

export default function Home() {
  return (
    <div className="container" >
      <Topbar title="Projects"/>
      <Head>
        <title>Emily's Site - Projects</title>
        {/* <title>Emily's Site!</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content>
          <Header title="About me!" />
          <p className="description">
          Allan please add details!
          </p>
          
          <Content name="projects">

            <ProjectAdRead imgSource="/images/cropped.png"
            imgAlt="Crypto Monitor"
            title="Crypto Monitor"
            description="I created a hardware-based Cryptocurrency price monitor that automatically updates and can be used for any desired cryptocurrency."
            link="https://github.com/hdew12354/cryptoPriceMonitor"
            lean="left"
            />
            <ProjectAdRead imgSource="/images/cropped.png"
            imgAlt="Allan please add details"
            title="Allan please add details"
            description="Allan please add details"
            link="#"
            lean="left"
            />
            <ProjectAdRead imgSource="/images/cropped.png"
            imgAlt="Allan please add details"
            title="Allan please add details"
            description="Allan please add details"
            link="#"
            lean="left"
            />

            
          </Content>

        </Content>
      </main>

      <Footer />
    </div>
  )
}
