import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'

export default function Home() {
  return (
    <div className="container" >
      <Topbar title="Contact"/>
      <Head>
        <title>Emily's Site - Contact</title>
        {/* <title>Emily's Site!</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content>
          <Header title="Contact me!" />
          <p className="description">
          Allan please add details!
          </p>
          
          <Content name="projects">

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
