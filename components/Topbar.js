import styles from './Topbar.module.css'


export default function Topbar({ title }) {
    return (
        <>
            <img src="/netliheart.svg" alt="Netlify Logo" className={styles.icon} />
            <h1 className={`${styles.topbar} ${styles.icon}`}>{title}</h1>

        </>
    )
}
  