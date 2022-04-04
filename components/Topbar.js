import styles from './Topbar.module.css'
import Layout from '../components/layout'
import BarButton from '../components/BarButton'

export default function Topbar({ title }) {
    // title = document.window.title;
    
    return (
        <>
            <Layout className={styles.lockToTop}>
                <nobr>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} href="index/#" />
                    <BarButton text={title} purpose="pageTitle" link="about" />
                    
                    {/* ^^^^   left to right   ^^^^ */}

                    {/* add search bar here maybe */}

                    {/* vvvv right to left now vvvv */}

                    <div className={styles.spacer}> </div>
                    <BarButton text="About" purpose="about" />
                    <BarButton text="Projects" purpose="projects" />
                    <BarButton text="Contact" purpose="contact" />
                    <BarButton text="Github" purpose="github" />
                </nobr>
            </Layout>
            
        </>
    )
}
  