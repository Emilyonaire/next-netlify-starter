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
                <div className={styles.icon}>temp</div>
                <div className={styles.pageTitle}>temp</div>
                <div className={styles.spacerGGGGG}>temp</div>
                <div className={styles.spacerGGGGG}>temp</div>
                <div className={styles.searchBarArea}>temp</div>
                <div className={styles.spacerGGGGG}>temp</div>
                <div className={styles.topbarArea}>temp</div>
                <div className={styles.topbarArea}>temp</div>
                <div className={styles.topbarArea}>temp</div>
            </div>
        </>
    )
}
  