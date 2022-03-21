import styles from './Topbar.module.css'

export default function Topbar() {
    return(
        <>
        <Topbar className='container'>
            {/* <img src="/pageIcon.svg" alt='Return to Home' className={styles.logo} /> */}
            <img src="/netliheart.svg" alt='Return to Home' className={styles.logo} />
        </Topbar>
        </>
    )
}