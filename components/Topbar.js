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
                <div className={styles.item1}>temp</div>
                <div className={styles.item2}>temp</div>
                <div className={styles.item3}>temp</div>
                <div className={styles.item3}>temp</div>
                <div className={styles.item4}>temp</div>
                <div className={styles.item3}>temp</div>
                <div className={styles.item5}>temp</div>
                <div className={styles.item5}>temp</div>
                <div className={styles.item5}>temp</div>
            </div>
        </>
    )
}
  