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
                <span className={`${styles.pageTitle} ${this.props.content.divClassName}`}> 
                    {title}
                </span>
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.spacer} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.search} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.spacer} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.area} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.area} href="index/#" />
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.area} href="index/#" />
            </div>
        </>
    )
}
  