import Head from 'next/head'
import Header from './Header'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}