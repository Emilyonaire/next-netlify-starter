import Head from 'next/head'
import styles from './content.module.css'

export default function Content({ children, name }) {
  if(name == "projects"){
    return (
      <>
        <main className={styles.mainProjects}>{children}</main>
      </>
    )
  }else if(name == "demo"){
    return (
      <>
        <main className={styles.gamePanel}>{children}</main>
      </>
    )
  }else{
    return (
      <>
        <main className={styles.main}>{children}</main>
      </>
    )
  }
}