import styles from './Topbar.module.css'
import Layout from '../components/layout'

export default function Topbar({ title }) {
    // title = document.window.title;
    
    return (
        <>
            <Layout className={styles.lockToTop}>
                <nobr>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} href="index/#" />
                    {/* MAKE COMPONENT TO USE AS BUTTONS, ALLOWS FOR EASIER STYLING */}
                    {/* WILL NEED TO MOVE BUTTON STYLING OVER AND USE IF STATEMENTS FOR EACH BUTTON TYPE */}
                    {/* DOABLE TBH */}
                    <div className={styles.pageTitle}>title</div>
                    
                    {/* ^^^^   left to right   ^^^^ */}

                    {/* add search bar here maybe */}

                    {/* vvvv right to left now vvvv */}

                    <div className={styles.spacer}> </div>
                    <div href="/about" className={styles.barArea}>About</div>
                    <div href="/projects" className={styles.barArea}>Projects</div>
                    <div href="/contact" className={styles.barArea}>Contact</div>
                </nobr>
            </Layout>
            
        </>
    )
}
  