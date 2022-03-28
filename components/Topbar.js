import styles from './Topbar.module.css'
import Layout from '../components/layout'

export default function Topbar({ title }) {
    // title = document.window.title;
    
    return (
        <>
            <div>
                <Layout>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} href="index/#" />
                </Layout>
            </div>
            
        </>
    )
}
  