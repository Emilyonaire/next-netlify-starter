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
            <div className={styles.topbarContainer}>
                <div class="gridContainer">
                    <div class="item1"></div>
                    <div class="item2"></div>
                    <div class="item3"></div>
                    <div class="item4"></div>
                    <div class="item5"></div>
                </div>
            </div>
            
        </>
    )
}
  