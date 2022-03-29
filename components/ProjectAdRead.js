import Head from 'next/head'
import Image from 'next/image'
import styles from './ProjectAdRead.module.css'

export default function ProjectAdRead({ imgSource, imgAlt, title, description, link, lean}) {
    if(lean == "left"){
        return (
            <>
                <div className={styles.areaLeft}>
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    <a className={styles.projectLink} href={link}>/{title}</a>
                </div>
            </>
        )
    }
    else if(lean == "right"){
        return (
            <>
                <div className={styles.areaRight}>
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    <a className={styles.projectLink} href={link}>/{title}</a>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className={styles.areaCenter}>
                    <Image src={imgSource} alt={imgAlt} className={styles.thumbnail} width={16*50} height={9*50}/>
                    <h2 className={styles.projectHeader}>{title}</h2>
                    <h3 className={styles.projectDescription}>{description}</h3>
                    <a className={styles.projectLink} href={link}>/{title}</a>
                </div>
            </>
        )
    }
}