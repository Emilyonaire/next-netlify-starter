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
          <ProjectAdRead imgSource="/images/icon-postmap-600px.png"
            imgAlt="postmap"
            title="PostMap"
            description="PostMap is an Open-Source chrome extension that allows users to select a postcode and view it on a map, as well as get the latitude and longitude of the postcode."
            link="https://github.com/Emilyonaire/postmap^Github Repo"
            lean="Right"
            />

            <ProjectAdRead imgSource="/images/icon-goldRoll-60px.png"
            imgAlt="bookingRoller"
            title="GoldRoll"
            description="GoldRoll is a fully custom desktop application, written in HTML and JS, with Google Calendar integrations, that allows users to import their booking calendar so that they can view, edit and inform customers of when their appointment is booked for in the day."
            link="https://github.com/Emilyonaire/auto-roll^Github Repo"
            lean="Center"
            />

            <ProjectAdRead imgSource="/images/icon-googleSheetsRename-60px.png"
            imgAlt="sheetNamer"
            title="SheetNamer"
            description="SheetNamer is a fully custom, Open-Source, Chrome extension that will automatically rename each Google Sheets tab to the name of the sheet, to increase productivity, by not having to manually search for the desired sheet in all open tabs."
            link="https://github.com/Emilyonaire/googleSheetsRename^Github Repo"
            lean="Center"
            />

            
          </Content>

        </Content>
      </main>

      <Footer />
    </div>
  )
}
