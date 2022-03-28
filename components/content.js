import Head from 'next/head'
import styles from './content.module.css'

export default function Content({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}