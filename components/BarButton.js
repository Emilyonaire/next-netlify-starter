import Head from 'next/head'
import styles from './BarButton.module.css'

export default function BarButton({ children, title, link}) {
    return (
        <>
            <div className={styles.btn}>{children}</div>
        </>
    )
}