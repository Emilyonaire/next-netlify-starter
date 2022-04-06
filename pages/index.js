import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Topbar from '@components/Topbar'
import Content from '@components/content'
import ProjectAdRead from '@components/ProjectAdRead'


export default function Home() {
  return (
    <div className="container" >
      <Topbar title="Home"/>
      <Head>
        <title>Emily's Site!</title>
        {/* <title>Emily's Site!</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Content>
          <Header title="Welcome to my Site!" />
          <p className="description">
            This is my site, with a description paragraph!
          </p>
          
          <Content name="projects">

            <ProjectAdRead imgSource="/images/cropped.png"
            imgAlt="About"
            title="About me!"
            description="Read more on my About page!"
            link="about"
            lean="left"
            />
            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="about#grades"
            title="Qualifications!"
            description="Read my Qualifications here!"
            link="about#grades"
            lean="center"
            />

            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="projects"
            title="Projects!"
            description="These are my past and current projects, read more on my Projects overview, or take a look at my github!"
            link="projects|https://github.com/Emilyonaire"
            lean="right" 
            />

            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="Colour Guide"
            title="Contact me!"
            description="You can reach out to me here if you wanted to get in touch!"
            link="contact"
            lean="center" 
            />

            <ProjectAdRead imgSource="/images/testImage.png"
            imgAlt="Colour Guide"
            title="Demo!"
            description="Here is a demo of my work!"
            link="demo"
            lean="left" 
            />
            
          </Content>

        </Content>
      </main>

      <Footer />
    </div>
  )
}
