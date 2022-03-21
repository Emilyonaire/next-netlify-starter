import styles from './Topbar.module.css'


export default function Topbar({ title }) {
    return <h1 className={`${styles.topbar} ${styles.logo}`}>{title}</h1>
}
  