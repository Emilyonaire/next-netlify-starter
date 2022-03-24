import styles from './Topbar.module.css'


export default function Topbar({ title }) {
    // title = document.window.title;
    
    return (
        <>
            {/* <nav class="navbar" style="background-color: rgb(31,35,36);" role={"navigation"} aria-label="main navigation"> */}
            {/* <nav class="navbar" role={"navigation"} aria-label="main navigation">
                <div className='navbar-brand'>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} href="index/#" />

                </div>
            </nav> */}
            <div className={styles.gridcontainer}>
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} href="index/#" />
                <span className={styles.pageTitle}> 
                    {title}
                </span>
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.spacerGGGGG} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.spacerGGGGG} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.searchBarArea} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.spacerGGGGG} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.topbarArea} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.topbarArea} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.topbarArea} href="index/#" />
            </div>
        </>
    )
}
  