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
          Here are my contact details.
          </p>
          
          <Content name="projects">

            <ProjectAdRead 
            title="Mobile"
            description="07470 904319"
            lean="left"
            emote="☎️"
            />
            <ProjectAdRead 
            title="Email"
            lean="left"
            link="mailto:emily.cowell.2002@gmail.com^emily.cowell.2002@gmail.com"
            emote="📧"
            />

            
          </Content>

        </Content>
      </main>

      <Footer />
    </div>
  )
}
