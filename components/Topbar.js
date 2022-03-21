import styles from './Topbar.module.css'

export default function Topbar() {
    return(
        <>
        <Topbar className={styles.footer}>
            <img src="/pageIcon.svg" alt='Return to Home' className={styles.logo} />
        </Topbar>
        </>
    )
}